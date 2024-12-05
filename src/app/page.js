import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>This is How I Built This Web Page</h1>

      <section className={styles.main}>
        <h2>1. Installing Node.js and NPM</h2>
        <p>
          First, I installed Node.js and the NPM package manager. I made sure that I had the latest stable version of Node.js installed on my system. This was important as it ensured that I had access to all the necessary tools to build my web project.
        </p>
      </section>

      <section className={styles.main}>
        <h2>2. Installing Next.js and Initializing the Project</h2>
        <p>
          Once Node.js was installed, I created a new directory for the project called <code>lab10c</code> and ran the following command to install the latest version of Next.js:
        </p>
        <pre><code>npx create-next-app@latest</code></pre>
        <p>This generated a <code>package.json</code> file for managing dependencies and scripts. With this, I was ready to start building my web application.</p>
      </section>

      <section className={styles.main}>
        <h2>3. Using Next.js for Routing and Rendering</h2>
        <p>
          I chose Next.js as the framework for handling routing and rendering. It&apos;s a popular React-based framework that simplifies routing, server-side rendering (SSR), and static site generation. It allowed me to focus more on the app&apos;s features and less on configuration.
        </p>
      </section>

      <section className={styles.main}>
        <h2>4. Page Rendering</h2>
        <p>
          After setting up Next.js, the page automatically rendered when I navigated to <code>http://localhost:3000</code>. This made it easy to develop the page and preview changes instantly. It also provided automatic routing through its file-based structure, which made handling different pages straightforward.
        </p>
      </section>

      <section className={styles.main}>
        <h2>5. Styling the Page</h2>
        <p>
          I added custom styles to the page by editing <code>page.module.css</code> and <code>globals.css</code>. This allowed me to give the page a clean and personalized look, enhancing both its functionality and appearance.
        </p>
      </section>

      <section className={styles.main}>
        <h2>6. Hosting the Page</h2>
        <p>
          Once the page was complete, I decided to host it on Netlify. I uploaded the entire project folder, which included the Next.js files, CSS files, and necessary assets. Netlify automatically built and deployed the page, making it accessible to everyone.
        </p>
      </section>

      <section className={styles.main}>
        <h2>7. Difficulties Encountered and How I solved it</h2>
        <ul>
          <li>I had difficulty using the <code>npx</code> command because it required Node.js to be installed first. I resolved this issue by installing Node.js.</li>
          <li>Another challenge was finding a suitable server to host my website. After researching different options, I chose Netlify because it simplified the deployment process and integrated well with my project.</li>
        </ul>
      </section>
    </div>
  );
}
