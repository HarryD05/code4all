//React dependencies
import React from 'react';

//Styling
import './tutorials.scss';

const Tab = () => {
  return <span className="tab"></span>
}

const PythonBasics2 = props => {
  return (
    <div className="tutorial" id="python2">
      <h1>Python Basics Plus</h1>

      <h2>Random modules</h2>
      <ul>
        <li>Modules provide you with a huge range of functions</li>
        <li>The random module allows you to generate random numbers or pick random items from a list etc.</li>

        <li><b>Random module functions</b></li>
        <pre>
          <code>
            <b>INPUT</b><br />
            <span className="bool">import</span> random <span className="comment">#This allows you to use the functions included in the random module</span><br /><br />

            <span className="io">print</span>(<span className="string">'Generating random numbers'</span>)<br />
            <span className="bool">for</span> counter <span className="bool">in</span> <span className="io">range</span>(3):<br />

            <Tab /><span className="io">print</span>(<span className="string">'Range - {'{}'}'</span>.format(random.range())) <span className="comment">#Returns a float between 0 and 1</span><br />
            <Tab /><span className="io">print</span>(<span className="string">'Randint - {'{}'}'</span>.format(random.randint(1, 6))) <span className="comment">#Returns a number between 1 and 6</span><br />
            <Tab /><span className="io">print</span>(<span className="string">'Randrange - {'{}'}'</span>.format(random.randrange(0, 6, 2))) <span className="comment">#Returns a number between 0 and 6, with a step of 2 (so 0, 2, 4 or 6)</span><br />
            <Tab /><span className="io">print</span>(<span className="string">''</span>) <span className="comment">#Line break between each iteration</span><br /><br />

            <span className="io">print</span>(<span className="string">'Random functions for lists'</span>)<br />
            names = [<span className="string">'Poppy'</span>, <span className="string">'Courtney'</span>, <span className="string">'James'</span>, <span className="string">'Jake'</span>]<br />
            <span className="io">print</span>(names)<br />
            <span className="io">print</span>(<span className="string">'Choice - {'{}'}'</span>.format(random.choice(names)) <span className="comment">#Returns a random element from the names list</span><br />
            random.shuffle(names) <span className="comment">#'Shuffles' the items in the names list</span><br />
            <span className="io">print</span>(names)<br />
          </code>
        </pre>

        <pre>
          <code className="output">
            <b style={{ color: "#000" }}>OUTPUT</b><br />
            Generating random numbers<br />
            Range - 0.644786952630014<br />
            Randint - 3<br />
            Randrange - 0<br /><br />
            Range - 0.9547185432952625<br />
            Randint - 1<br />
            Randrange - 4<br /><br />
            Range - 0.439160836805507<br />
            Randint - 5<br />
            Randrange - 6<br /><br />
            Random functions for lists<br />
            ['Poppy', 'Courtney', 'James', 'Jake']<br />
            Courtney<br />
            ['Jake', 'James', 'Poppy', 'Courtney']
          </code>
        </pre>

        <li>There are a number of different ways of importing functions from modules</li>
        <pre>
          <code>
            <span className="bool">import</span> random<br />
            random.randint(4, 10)<br />
            <span className="comment">#Imports all the functions from the module but you have to specify the module when calling the function</span>
          </code>
        </pre>

        <pre>
          <code>
            <span className="bool">import</span> * <span className="bool">from</span> random<br />
            randint(4, 10)<br />
            <span className="comment">#Imports all the functions from the module & you don't have to specify the module when calling the function</span>
          </code>
        </pre>

        <pre>
          <code>
            <span className="bool">from</span> random <span className="bool">import</span> randint, randrange<br />
            randint(4, 10)<br />
            randrange(2, 15)<br />
            <span className="comment">#Imports the functions specificed from the module & you don't have to specify the module when calling the function</span>
          </code>
        </pre>
      </ul>

      <h2>2D arrays</h2>
      <h2>Dictionaries</h2>
      <h2>Functions</h2>
      <h2>Classes</h2>
      <h2>Error handling</h2>
      <h2>Basic filehandling</h2>
      <h2>Basic regular expressions</h2>
      <h2>Python Basics Plus Project Ideas</h2>
    </div>
  )
}

export default PythonBasics2;