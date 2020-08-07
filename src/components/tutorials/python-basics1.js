//React dependencies
import React from 'react';

//Styling
import './tutorials.scss';

const Tab = () => {
  return <span className="tab"></span>
}

const PythonBasics1 = props => {
  return (
    <div className="tutorial">
      <h1>Python Basics</h1>

      <h2>Comments</h2>
      <ul>
        <li>When you write code I think the most important part isn't actually the code, it is the comments - comments are ignored by the translator (aren't part of the program that is run)</li>
        <li>You can use them to explain pieces of code, add to do lists to your code etc.</li>
        <li>Each language has a different way to sign post a comment, in Python it is the '#' the text should turn red, the red text will be ignored by the translator</li>
        <pre>
          <code>
            <b>INPUT</b><br />
            <span className="comment">#This will be ignored</span><br />
            <span className="comment">#Code below selects the correct name from the database based on age</span>
          </code>
        </pre>

        <pre>
          <code className="output">
            <b style={{ color: '#000' }}>OUTPUT</b><br />
            (nothing)
          </code>
        </pre>
      </ul>

      <h2>Print statements</h2>
      <ul>
        <li>At the start of your Python journey, your output will be text (in the future it can be graphical)</li>
        <li>To output data you use a 'print' statement, this will appear in what is called the 'console' when you run your program</li>
        <pre>
          <code>
            <b>INPUT</b><br />
            <span className="io">print</span>(<span className="string">'Hello World'</span>)<br />
            <span className="io">print</span>(5)<br />
            <span className="io">print</span>(<span className="bool">False</span>)<br />
            <span className="io">print</span>(<span className="string">'James said, "Hello"'</span>)<br />
            <span className="comment">#You can print any data type as shown above</span>
          </code>
        </pre>

        <pre>
          <code className="output">
            <b style={{ color: "#000" }}>OUTPUT</b><br />
            Hello world<br />
            5<br />
            False<br />
            James said, 'Hello'
        </code>
        </pre>
      </ul>

      <h2>Variables</h2>
      <ul>
        <li>Variables are pieces of data, with a name & a location in the computer's memory</li>
        <li>They have a data type e.g.</li>
        <ul>
          <li><b>integer</b> e.g. -1, 0, 32</li>
          <li><b>real/float</b> e.g. 0.3, 3.45, -20.2</li>
          <li><b>string</b> e.g. <span className="string">"hello"</span>, <span className="string">'2ascd32-!'</span></li>
          <li><b>boolean</b> e.g. <span className="bool">True</span> or <span className="bool">False</span></li>
        </ul>
        <li>In python you don't have to specify the data type of the variable it is set automatically (called dynamic typing)</li>
        <li>Below is example of how to use variables</li>
        <pre>
          <code>
            <b>INPUT</b><br />
            apples = 6<br />
            bananas = 8<br />
            fruit = apples + bananas<br />
            <span className="io">print</span>(fruit)<br />
            <br />
            first_name = <span className="string">"Destiny"</span><br />
            surname = <span className="string">'Davidson'</span><br />
            <span className="comment">#You can use " or ' to wrap a string</span><br />
            name = first_name + surname<br />
            <span className="io">print</span>(name)
          </code>
        </pre>

        <pre>
          <code className="output">
            <b style={{ color: '#000' }}>OUTPUT</b><br />
            14<br />
            Destiny Davidson<br />
          </code>
        </pre>
        <li>As shown above, you can add 2 variable together, to do this they must be the same data type e.g. a string or number (int/float)</li>
        <li>An example of the error is shown below</li>
        <pre>
          <code>
            <b>INPUT</b><br />
            apples = 4<br />
            bananas = <span className="string">'6'</span><br />
            <span className="io">print</span>(apples + bananas)<br />
          </code>
        </pre>

        <pre>
          <code className="error" contenteditable spellcheck="false">
            <b style={{ color: '#000' }}>OUTPUT (an error)</b><br />
            Traceback (most recent call last):<br />
            File "...\casting.py", line 3, in &lt;module&gt;<br />
            3 print(apple + bananas)<br />
            TypeError: unsupported operand type(s) for +: 'int' and 'str'<br />
          </code>
        </pre>
        <li>This error is basically saying you can't add together an integer & a string (the last line)</li>

        <li>To ensure data is a specific data type, you can change the data type using casting (shown below)</li>
        <pre>
          <code>
            <b>INPUT</b><br />
            apples = 4<br />
            bananas = <span className="string">'6'</span><br />
            total1 = apples + <span className="io">int</span>(bananas)<br />
            <span className="io">print</span>(total1)<br /><br />

            apples = 4<br />
            bananas = <span className="string">'6'</span><br />
            total2 = <span className="io">str</span>(apples) + bananas<br />
            <span className="io">print</span>(total2)<br /><br />
            <span className="comment">#You can do the same with 'float()'</span>
          </code>
        </pre>

        <pre>
          <code className="output">
            <b style={{ color: '#000' }}>OUTPUT</b><br />
            10<br />
            46
          </code>
        </pre>
      </ul>

      <h2>Print formatting</h2>
      <ul>
        <li>When you output data to the console you may want to use variables & set strings - there are many ways of doing this as shown below</li>
        <pre>
          <code>
            <b>INPUT</b><br />
            apples = 4<br />
            <span className="io">print</span>(<span className="string">'They have '</span> + <span className="io">str</span>(apples) + <span className="string">' apples'</span>)<br />
            <span className="io">print</span>(<span className="string">'They have'</span>, <span className="io">str</span>(apples), <span className="string">'apples'</span>)<br />
            <span className="io">print</span>(<span className="string">'They have {'{}'} apples'</span>.<span className="io">format</span>(apples))<br /><br />

            <span className="comment">#You can also include multiple variables - one example below</span><br />
            bananas = 8<br />
            <span className="io">print</span>(<span className="string">'They have {'{}'} apples and {'{}'} bananas'</span>.<span className="io">format</span>(apples, bananas))<br /><br />
          </code>
        </pre>

        <pre>
          <code className="output">
            <b style={{ color: '#000' }}>OUTPUT</b><br />
            They have 4 apples<br />
            They have 4 apples<br />
            They have 4 apples<br />
            They have 4 apples and 8 bananas
          </code>
        </pre>
      </ul>

      <h2>Input statements</h2>
      <ul>
        <li>In a majority of programs you will require input from the user whether it be a name, email, password, number etc.</li>
        <pre>
          <code>
            <b>INPUT</b><br />
            name = <span className="io">str</span>(<span className="io">input</span>(<span className="string">'What is your name? '</span>))<br />
            <span className="comment">#I always cast the input to the data type I require e.g if you want a number do int(input())</span><br />
            <span className="io">print</span>(<span className="string">'Hi, {'{}'}'</span>.<span className="io">format</span>(name))
          </code>
        </pre>

        <pre>
          <code className="output">
            <b style={{ color: '#000' }}>OUTPUT</b> <span style={{ color: '#000' }}>(User input is in black)</span><br />
            What is your name? <span style={{ color: '#000' }}>Harry</span><br />
            Hi, Harry
          </code>
        </pre>
        <li>The string you put in the brackets of the input statement, is called the prompt & is what is output to the user before they can input their response</li>
        <li>Whatever the user inputs is stored in the variable that you put equal to the input (e.g. name in the example above)</li>
      </ul>

      <h2>If-else statements</h2>
      <ul>
        <li>Currently all of the code examples have run from line 1 to the end (called sequence)</li>
        <li>But, you code can have multiple routes - this is called selection, an example of this is below</li>
        <pre>
          <code>
            <b>INPUT</b><br />
            age = <span className="io">int</span>(<span className="io">input</span>(<span className="string">'How old are you? '</span>))<br />
            <span className="bool">if</span> age &lt;= 12:<br />
            <Tab /><span className="io">print</span>(<span className="string">'You are very young!'</span>)<br />
            <span className="bool">elif</span> age &lt;= 18:<br />
            <Tab /><span className="io">print</span>(<span className="string">'You are teenager!'</span>)<br />
            <span className="bool">else</span>:<br />
            <Tab /><span className="io">print</span>(<span className="string">'You are an adult!'</span>)<br />
          </code>
        </pre>

        <pre>
          <code className="output">
            <b style={{ color: '#000' }}>OUTPUT</b><br />
            How old are you? <span style={{ color: '#000' }}>15</span><br />
            You are a teenager!
          </code>
        </pre>

        <li>As seen in the example above, you can use comparison operators to test for conditions (the statement after the if/elif is called a conditional)</li>
        <li>If the conditional is true, then the code below will be run</li>
        <li>Elif means only test this condition if the statement above is false</li>
        <li>Else means if all the conditions above are false, then run the code below</li>
        <li>You can also use strings in if statements</li>

        <pre>
          <code>
            <b>INPUT</b><br />
            <span className="io">print</span>(<span className="string">'Case sensitive'</span>)<br />
            fav_colour = <span className="io">str</span>(<span className="io">input</span>(<span className="string">'What is your favourite colour? '</span>))<br />
            <span className="bool">if</span> fav_colour == <span className="string">'GREEN'</span>:<br />
            <Tab /><span className="io">print</span>(<span className="string">'Mine too!'</span>)<br />
            <span className="bool">else</span>:<br />
            <Tab /><span className="io">print</span>(<span className="string">'I prefer green!'</span>)<br />
            <br />
            <span className="comment">#But the user may not enter their colour in capitals, so we can make their input capitalised so the input isn't case sensitive</span><br />
            <span className="io">print</span>(<span className="string">'\nCase insensitive'</span>)<br />
            <span className="comment">#'\n' means new line!</span><br />
            fav_colour = <span className="io">str</span>(<span className="io">input</span>(<span className="string">'What is your favourite colour? '</span>)).upper()<br />
            <span className="bool">if</span> fav_colour == <span className="string">'GREEN'</span>:<br />
            <Tab /><span className="io">print</span>(<span className="string">'Mine too!'</span>)<br />
            <span className="bool">else</span>:<br />
            <Tab /><span className="io">print</span>(<span className="string">'I prefer green!'</span>)<br />
          </code>
        </pre>

        <pre>
          <code className="output">
            <b style={{ color: '#000' }}>OUTPUT</b><br />
            Case sensitive<br />
            What is your favourite colour? <span style={{ color: '#000' }}>green</span><br />
            I prefer green!<br /><br />
            Case insensitive<br />
            What is your favourite colour? <span style={{ color: '#000' }}>green</span><br />
            Mine too!
          </code>
        </pre>
      </ul>

      <h2>Arrays/lists</h2>
      <h2>For & while loops</h2>

    </div >
  )
}

export default PythonBasics1;