import React from "react";
import Section from 'components/Section/Section';
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification.jsx";


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = feedback => {
    this.setState(prevSate => ({
      [feedback]: prevSate[feedback] + 1,
    }));
  };


  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onBtnClick={this.onBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) :
            (
              <Notification message="There is no feedback" />
            )
          }
        </Section>
      </div>
    );
  }
}