import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <div className="intro">
        <div className="avatar">
          <Image src="/avatar.jpg" alt="Matthew Cui" width={520} height={520} priority />
        </div>
        <h1>Hi, I&apos;m Matthew</h1>

        <p>
          I&apos;m currently at{" "}
          <a href="https://www.ox.ac.uk/" target="_blank" rel="noopener">Oxford</a>{" "}
          pursuing an MBA.
        </p>
      </div>

      <p>
        Prior to that, I was learning long&#8209;only capital management at{" "}
        <a href="http://www.industrialequity.com/" target="_blank" rel="noopener">IEL</a>{" "}
        from the insightful Raymond&nbsp;Webb.
      </p>

      <p>
        Before diving into finance, I spent a decade building things at{" "}
        <a href="https://www.nasa.gov/" target="_blank" rel="noopener">NASA</a>,{" "}
        <a href="https://www.disney.com/" target="_blank" rel="noopener">Disney</a>,{" "}
        <a href="https://www.northropgrumman.com/" target="_blank" rel="noopener">Northrop&nbsp;Grumman</a>,{" "}
        <a href="https://www.symphonymarkets.com/" target="_blank" rel="noopener">Symphony&nbsp;Markets</a>, and{" "}
        <a href="https://www.lavel.ai/" target="_blank" rel="noopener">Lavel</a>{" "}
        (left in 2024).
      </p>

      <p>
        You can learn more about my experience{" "}
        <a href="https://www.linkedin.com/in/matthewwcui/" target="_blank" rel="noopener">here</a>.{" "}
        <a href="mailto:matthew.w.cui@gmail.com">Let&apos;s connect</a> if you&apos;d like to chat.
      </p>

      <h2>Favorite Media</h2>

      <details className="media-group">
        <summary><span className="toggle-icon" /> Books</summary>
        <div className="media-content">
          <ul className="dash-list">
            <li><a href="https://www.amazon.com/Lessons-History-Will-Durant/dp/143914995X" target="_blank" rel="noopener">The Lessons of History</a> by&nbsp;Will&nbsp;and&nbsp;Ariel&nbsp;Durant</li>
            <li><a href="https://www.amazon.com/Fish-That-Ate-Whale-Americas/dp/1250033314" target="_blank" rel="noopener">The Fish that Ate the Whale</a> by&nbsp;Rich&nbsp;Cohen</li>
            <li><a href="https://www.amazon.com/What-Takes-Lessons-Pursuit-Excellence/dp/1501158147" target="_blank" rel="noopener">What It Takes</a> by&nbsp;Stephen&nbsp;A.&nbsp;Schwarzman</li>
            <li><a href="https://www.amazon.com/Bloomberg-Michael-R/dp/0471208884" target="_blank" rel="noopener">Bloomberg</a> by&nbsp;Michael&nbsp;Bloomberg</li>
            <li><a href="https://www.amazon.com/Tao-Charlie-Munger-Compilation-Commentary/dp/150115334X" target="_blank" rel="noopener">The Tao of Charlie Munger</a> by&nbsp;David&nbsp;Clark</li>
            <li><a href="https://www.amazon.com/Letters-J-D-Rockefeller-his-son/dp/B09BY8189Q" target="_blank" rel="noopener">The 38 Letters from J.D. Rockefeller to His Son</a> by&nbsp;G.&nbsp;Ng</li>
            <li><a href="https://www.amazon.com/Want-Where-Going-Never-There/dp/1681840480" target="_blank" rel="noopener">All I Want To Know Is Where I&apos;m Going To Die So I&apos;ll Never Go&nbsp;There</a>&nbsp;<span style={{ whiteSpace: "nowrap" }}>by&nbsp;Peter&nbsp;Bevelin</span></li>
            <li><a href="https://a.co/d/05E1wtEo" target="_blank" rel="noopener">A Pirate Looks at Fifty</a> by&nbsp;Jimmy&nbsp;Buffett</li>
            <li><a href="https://www.amazon.com/Snowball-Warren-Buffett-Business-Life/dp/0553384619" target="_blank" rel="noopener">The Snowball</a> by&nbsp;Alice&nbsp;Schroeder</li>
            <li><a href="https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike/dp/1501135910" target="_blank" rel="noopener">Shoe Dog</a> by&nbsp;Phil&nbsp;Knight</li>
            <li><a href="https://www.amazon.com/Winning-Unforgiving-Race-Greatness-Grover/dp/1982168862" target="_blank" rel="noopener">Winning</a> by&nbsp;Tim&nbsp;S.&nbsp;Grover</li>
            <li><a href="https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/0062407805" target="_blank" rel="noopener">Never Split the Difference</a> by&nbsp;Chris&nbsp;Voss</li>
            <li><a href="https://www.amazon.com/Female-Brain-Louann-Brizendine/dp/0767920104" target="_blank" rel="noopener">The Female Brain</a> by&nbsp;Louann&nbsp;Brizendine,&nbsp;MD</li>
            <li><a href="https://www.amazon.com/Male-Brain-Breakthrough-Understanding-Think/dp/0767927540" target="_blank" rel="noopener">The Male Brain</a> by&nbsp;Louann&nbsp;Brizendine,&nbsp;MD</li>
          </ul>
        </div>
      </details>

      <details className="media-group">
        <summary><span className="toggle-icon" /> Papers</summary>
        <div className="media-content">
          <ul className="dash-list">
            <li><a href="https://igyfoundation.org.uk/wp-content/uploads/2021/03/Full_Collection_Nomad_Letters_.pdf" target="_blank" rel="noopener">Nomad Investment Partnership Letters</a></li>
          </ul>
        </div>
      </details>

      <details className="media-group">
        <summary><span className="toggle-icon" /> Podcasts</summary>
        <div className="media-content">
          <ul className="dash-list">
            <li><a href="https://www.founderspodcast.com/" target="_blank" rel="noopener">Founders</a></li>
            <li><a href="https://allin.com/" target="_blank" rel="noopener">All-In</a></li>
            <li><a href="https://www.tbpn.com/" target="_blank" rel="noopener">TBPN</a></li>
          </ul>
        </div>
      </details>

      <p>I enjoy adventuring, salsa dancing, and spending time with friends and family.</p>

      <p>
        My dream is to climb{" "}
        <a href="https://en.wikipedia.org/wiki/Mount_Everest" target="_blank" rel="noopener">Everest</a>.
      </p>

      <footer>Los Angeles, California</footer>
    </div>
  );
}
