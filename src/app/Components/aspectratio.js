// the idea is that this keeps the form factor of the website clean
// the goal is to have things change minimally between desktop and mobile
// the baseline is the iphone aspect ratio 19.5:9


// Explanation:
// relative w-full: The div is set to be relative with a width of 100% of its parent element.
// style={{ paddingTop: '46.15%' }}: This padding-top ensures the aspect ratio is maintained. It's calculated as (9 / 19.5) * 100 = 46.15%.
// absolute inset-0: This ensures the child content (children) fills the container completely.


export default function AspectRatio({ children }) {
    return (
      <div className="relative w-full" style={{ paddingTop: '46.15%' }}>
        <div className="absolute inset-0">
          {children}
        </div>
      </div>
    );
  }