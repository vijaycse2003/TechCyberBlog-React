import React from "react";
import Cards from "./Cards";
import "./Updatesblog.css";

export default function Updateblog() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title">
          What's New in React 18: Guiding to React 18 New Features
        </h1>
        <div className="container cont">
          <Cards
            title="01"
            desc="It is the most useful feature added to the react 18 features list, from solving a highly problematic concurrency issue. The concurrent react is a virtual element that eases the developers to have multiple instances of their UI "
            head="Concurrent React"
          />
          <Cards
            title="02"
            desc="React has an in-built batching feature that groups all the state updates through event handlers. It saves the files from undergoing an unnecessary rendering process. So, in addition to this, React 18 has an improvised form of Batching called React 18"
            head="Improvement in Automatic Batching"
          />
          <Cards
            title="03"
            desc="Transition is a new feature introduced in the React 18s feature list. The developers can set a priority list based on the updates happening frequently."
            head="New Start Transition API to Keep Your App Responsive"
          />
          <Cards
            title="04"
            desc="React suspense is a feature that allows the developers to keep an eye on the rendering components till the process continues. It has a fallback feature which is then displayed."
            head=" New Suspense SSR, Architectural Improvements"
          />
          <Cards
            title="05"
            desc="React has some predefined hooks to perform a specific task as per the developers request. Some of the latest introduced react hooks are as follows"
            head=" New APIs/Hooks startTransition(), useTransition(), useDeferredValue()"
          />
        </div>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5kdCQq4yl7feU1YZ_hR0IFhHr4_ARFOQlg&usqp=CAU"
          alt="tech"
        />
        <h2 className="node-title">
          Node.js 18 updates OpenSSL support, enables fetch API
        </h2>
        <h6 className="node-content">
          Node.js 18, the latest version of the popular JavaScript runtime, has
          been released, bringing enhancements in cryptography and turning on an
          experimental fetch API by default. However, prebuilt binaries for
          32-bit Windows are not yet available.Introduced April 19 and available
          from the Node.js website, Node.js 18 improves security with support
          for the OpenSSL 3.0 cryptography library, which includes open source
          implementations of SSL and TLS protocols for securing communications
          across networks. OpenSSL 3.0 has a FIPS (Federal Information
          Processing Standards) module that has been submitted for validation.
          FIPS is a set of US government requirements for governing
          cryptographic usage in the public sector Node.js 18’s experimental,
          browser-compatible global fetch API provides an interface for fetching
          resources across networks. Although available since Node.js 17, the
          API will be enabled by default in Node.js 18. While similar to
          XMLHttpRequest, the API provides a more powerful, flexible feature
          set, Node.js project developers said
        </h6>
        <a href="https://www.infoworld.com/article/3657636/nodejs-18-updates-openssl-support-enables-fetch-api.html">
          Read More
        </a>
      </div>
      <div className="card">
        <img src="" alt="" />
        <h1 className="node-title">ChatGpt Release notes (March 23)</h1>
        <h6 className="node-content">
          We are announcing experimental support for AI plugins in ChatGPT —
          tools designed specifically for language models. Plugins can help
          ChatGPT access up-to-date information, run computations, or use
          third-party services. You can learn more about plugins here.
        </h6>
        <ul>
          <li>
            Browsing: An experimental model that knows when and how to browse
            the internet
          </li>
          <li>
            Code Interpreter: An experimental ChatGPT model that can use Python,
            and handles uploads and downloads
          </li>
          <li>
            Third-party plugins: An experimental model that knows when and how
            to use external plugins.
          </li>
        </ul>
        <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes">
          Read More
        </a>
      </div>







{/* 3D animations */}
<div className="row mb-4 mt-4">
  <h1 className="threeD-title">Trend Jobs Offers</h1>
<div class="wrap">
        <div class="cube">
            <div class="front">
                <h2>Fullstack Developer</h2>
                What is a full stack developer?
A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node) 
            </div>
            <div class="backs">
                <h2>Web developer</h2>
                A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server
            </div>
            <div class="top">
                <h2>Machine Learning</h2>
                What is in machine learning?
What is machine learning? Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.
            </div>
            <div class="bottom">
                <h2>AI Specialist</h2>
                An Artificial Intelligence (AI) Specialist is a professional who specializes in creating, developing, and implementing AI systems and technologies.
            </div>
            <div class="left">
                <h2>Python Developer</h2>
                A Python Developer is responsible for coding, designing, deploying, and debugging development projects, typically on the server-side (or back-end). They may, however
            </div>
            <div class="right">
                <h2>Cybersecurity</h2>
                Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information;
            </div>
        </div>
    </div>






</div>









    </div>
  );
}
