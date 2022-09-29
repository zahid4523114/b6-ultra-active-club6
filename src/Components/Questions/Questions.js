import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div>
      <div>
        <h1>How does react work?</h1>
        <p>
          In English ReactJS divides the UI into isolated reusable pieces of
          code known as components. React components work similarly to
          JavaScript functions as they accept arbitrary inputs called properties
          or props. It's possible to have as many components as necessary
          without cluttering your code.
        </p>
      </div>
      <div>
        <h1>Difference between Props and State</h1>
        <b>Props:</b>
        <p>1.Props are read-only.</p>
        <p>2.Props are immutable.</p>
        <p>
          3.Props allow you to pass data from one component to other components
          as an argument.
        </p>
        <p>4.Props can be accessed by the child component.</p>
        <p>5.Props are used to communicate between components.</p>
        <p>6.Stateless component can have Props.</p>

        <b>State</b>
        <p>1.State changes can be asynchronous.</p>
        <p>2.State is mutable.</p>
        <p>3.State holds information about the components.</p>
        <p>4.State cannot be accessed by child components.</p>
        <p>
          5.States can be used for rendering dynamic changes with the component.
        </p>
        <p>6.Stateless components cannot have State.</p>
      </div>
      <div>
        <h1>The useEffect Hook Usages</h1>
        <p>1.Side Effect Runs After Every Render</p>
        <p>2.Side Effect Runs Only Once After Initial Render</p>
        <p>3.Side Effect Runs After State Value Changes</p>
        <p>4.Side Effect Runs After Props Value Change</p>
        <p>5.Side Effect Runs After Props and State Value Change</p>
        <p>6.Side EffectCleanup</p>
      </div>
    </div>
  );
};

export default Questions;
