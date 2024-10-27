from PIL import Image
import os

# Function to resize images while maintaining aspect ratio
def resize_images(image_dir, max_width=1080):
    for filename in os.listdir(image_dir):
        if filename.endswith(('.png', '.jpg', '.jpeg')):
            img_path = os.path.join(image_dir, filename)
            img = Image.open(img_path)

            # Get original dimensions
            width, height = img.size

            # Calculate the new height maintaining the aspect ratio
            if width > max_width:
                new_height = int((max_width / width) * height)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

                # Save the resized image, overwriting the original one
                img.save(img_path)

# Directory where the images are stored
image_dir = './'

# Resize images to have a max width of 1080px
resize_images(image_dir)

