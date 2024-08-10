// the idea is that this keeps the form factor of the website clean
// the goal is to have things change minimally between desktop and mobile
// the baseline is the iphone aspect ratio 19.5:9


// Explanation:
// h-screen flex items-center justify-center: The outer container takes up the full height of the viewport (h-screen) and centers the content.
// Aspect Ratio Box (style={{ width: 'calc(100vh * (9 / 19.5))', height: '100vh' }}):
// The height is set to 100vh to take the full height of the viewport.
// The width is calculated using calc(100vh * (9 / 19.5)) to maintain the 19.5:9 aspect ratio based on the viewport height.



const AspectRatio = ({ children }) => {
  return (

      <div className="relative bg-white" style={{ width: 'calc(100vh * (9 / 19.5))', height: '100vh' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>

  );
};

export default AspectRatio;

