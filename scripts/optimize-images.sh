#!/bin/bash

# Image Optimization Script for Portfolio
# This script optimizes all images in the public directory

echo "🖼️  Starting image optimization..."

# Check if required tools are installed
command -v cwebp >/dev/null 2>&1 || { 
    echo "❌ cwebp not found. Please install webp tools:"
    echo "   Ubuntu/Debian: sudo apt-get install webp"
    echo "   macOS: brew install webp"
    exit 1
}

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Create optimized directory if it doesn't exist
mkdir -p public/optimized

# Function to optimize PNG/JPG to WebP
optimize_image() {
    local file="$1"
    local output="${file%.*}.webp"
    local size_before=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")
    
    echo -e "${BLUE}Processing: $file${NC}"
    
    # Convert to WebP with 85% quality
    cwebp -q 85 "$file" -o "$output" >/dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        local size_after=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output")
        local saved=$((size_before - size_after))
        local percent=$((saved * 100 / size_before))
        echo -e "${GREEN}✓ Saved: $(numfmt --to=iec $saved) ($percent%)${NC}"
    else
        echo -e "${RED}✗ Failed to convert $file${NC}"
    fi
}

# Optimize certificates
echo -e "\n${BLUE}📜 Optimizing certificates...${NC}"
if [ -d "public/certificates" ]; then
    cd public/certificates
    for img in *.png *.jpg *.jpeg 2>/dev/null; do
        [ -f "$img" ] && optimize_image "$img"
    done
    cd ../..
fi

# Optimize project images
echo -e "\n${BLUE}💼 Optimizing project images...${NC}"
if [ -d "public/projects" ]; then
    cd public/projects
    for img in *.png *.jpg *.jpeg 2>/dev/null; do
        [ -f "$img" ] && optimize_image "$img"
    done
    cd ../..
fi

# Optimize experience images
echo -e "\n${BLUE}🏢 Optimizing experience images...${NC}"
if [ -d "public/experiences" ]; then
    cd public/experiences
    for img in *.png *.jpg *.jpeg 2>/dev/null; do
        [ -f "$img" ] && optimize_image "$img"
    done
    cd ../..
fi

# Optimize root public images (excluding SVGs)
echo -e "\n${BLUE}🏠 Optimizing root public images...${NC}"
cd public
for img in *.png *.jpg *.jpeg 2>/dev/null; do
    [ -f "$img" ] && optimize_image "$img"
done
cd ..

# Calculate total savings
echo -e "\n${GREEN}✅ Image optimization complete!${NC}"
echo -e "\n${BLUE}📊 Summary:${NC}"
total_original=$(find public -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | xargs -I {} stat -f%z {} 2>/dev/null || stat -c%s {} | awk '{sum+=$1} END {print sum}')
total_webp=$(find public -name "*.webp" | xargs -I {} stat -f%z {} 2>/dev/null || stat -c%s {} | awk '{sum+=$1} END {print sum}')

echo "   Original images: $(numfmt --to=iec $total_original 2>/dev/null || echo $total_original bytes)"
echo "   WebP images: $(numfmt --to=iec $total_webp 2>/dev/null || echo $total_webp bytes)"

echo -e "\n${BLUE}📝 Next steps:${NC}"
echo "   1. Update image imports to use .webp files"
echo "   2. Add fallback support in components"
echo "   3. Test on different browsers"
echo "   4. Consider deleting original large files after verification"

echo -e "\n${GREEN}Done! 🎉${NC}"
