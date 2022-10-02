/**
 * https://emotion.sh/docs/styled
 */

// Making className optional fioxes a error
interface Props {
  className?: string
}

function ComponentStylesWithEmotion({className}: Props) {
  return (
  <div className={className}>
    I'm a React Component
  </div>
  );
}

export default ComponentStylesWithEmotion;
