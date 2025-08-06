import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <h1>🚀 My First Next.js Project</h1>
        <p>
          I'm <strong>Arjun Divraniya</strong>, a creative developer starting my journey with Next.js.
          Today, I built and deployed this project from scratch and explored the basics like routing, page structure,
          and styling with global CSS. 🎉
        </p>
      </section>

      <section>
        <h2>👨‍💻 About Me</h2>
        <p>
          I'm a passionate web developer who loves combining design and code. I enjoy working with React, Figma, and creating
          real-world applications that solve problems and bring ideas to life.
        </p>
      </section>

      <section>
        <h2>🛠️ My Skills</h2>
        <p>
          HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, Figma, Git, Photoshop, Firebase, Redux
        </p>
      </section>

      <section>
        <h2>📁 Projects I've Built</h2>
        <p>
          ✅ Photographer Booking App (MERN)  
          ✅ YouTube, Redbus & Disney Clone (React)  
          ✅ Portfolio Website (HTML/CSS/JS)  
          ✅ Real-Time Chat System (Socket.io)
        </p>
      </section>

      <section>
        <h2>⚙️ Tools I Use</h2>
        <p>
          Vite, Visual Studio Code, GitHub, Figma, Adobe Photoshop, Canva, Capcut, Netlify, Vercel, Render
        </p>
      </section>

      <section>
        <h2>📚 What I Learned</h2>
        <p>
          ✅ How Next.js handles routing through the <code>pages</code> folder  
          ✅ How to style using global CSS  
          ✅ How to create modular, clean components  
          ✅ How to plan and structure a real-world web project
        </p>
      </section>

      <section>
        <h2>🌟 What’s Next?</h2>
        <p>
          I plan to build full-stack apps with authentication, dynamic routing, API handling, MongoDB integration,
          chat systems, and deployment. I’ll also explore performance optimization and SEO in Next.js.
        </p>
      </section>

      <section>
        <h2>📬 Connect with Me</h2>
        <p>
          GitHub: <a href="https://github.com/ArjunDivraniya" style={{ color: '#70d6ff' }}>Arjun Divraniya</a><br />
          LinkedIn: <a href="https://www.linkedin.com/in/arjun-divraniya-/" style={{ color: '#70d6ff' }}>Arjun Divraniya</a><br />
          Portfolio: <a href="https://arjun-divraniya.vercel.app/" style={{ color: '#70d6ff' }}>Arjun's Portfolio</a>
        </p>
      </section>

      <footer style={{ textAlign: 'center', padding: '30px 0', fontSize: '0.9rem', color: '#aaa' }}>
        © 2025 Arjun Divraniya | Built with ❤️ in Next.js
      </footer>
    </div>
  );
}

