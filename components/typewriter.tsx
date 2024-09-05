import Typewriter from 'typewriter-effect';

function TypeWriterEffect() {
  return (
    <Typewriter
      options={{
        strings: ['ReactJS', 'NextJS', 'C++', 'Python'],
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default TypeWriterEffect;