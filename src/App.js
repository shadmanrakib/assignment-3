/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import other components
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";
import { calculateAccountBalance } from "./utils";

class App extends Component {
  constructor() {
    // Create and initialize state
    super();
    this.state = {
      accountBalance: 0,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: "Joe Smith",
        memberSince: "11/22/99",
      },
    };
  }

  async componentDidMount() {
    try {
      const creditsRes = await fetch(
        "https://johnnylaicode.github.io/api/credits.json"
      );
      const creditList = await creditsRes.json();

      const debitsRes = await fetch(
        "https://johnnylaicode.github.io/api/debits.json"
      );
      const debitList = await debitsRes.json();

      const accountBalance = calculateAccountBalance(creditList, debitList);

      this.setState({
        accountBalance,
        creditList,
        debitList,
      });
    } catch (e) {
      console.error(e);
    }
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  addCredit = ({ amount, description }) => {
    const id = crypto.randomUUID();
    const dateStr = new Date().toUTCString();
    const newCredit = {
      id,
      date: dateStr,
      amount,
      description,
    };
    const newCreditList = [...this.state.creditList, newCredit];
    const newBalance = this.state.accountBalance + amount;
    this.setState({ creditList: newCreditList, accountBalance: newBalance });
  };


  //addDebit story
  addDebit = ({ amount, description }) => {
    const id = crypto.randomUUID();
    const dateStr = new Date().toISOString().slice(0, 10); 
    const newDebit = {
      id,
      date: dateStr,
      amount: parseFloat(amount), 
      description,
    };
    const newDebitList = [...this.state.debitList, newDebit];
    const newBalance = this.state.accountBalance - amount;  // subtract debit from balance
    this.setState({ debitList: newDebitList, accountBalance: newBalance });
  };


  // Create Routes and React elements to be rendered using React components
  render() {
    // Create React elements and pass input props to components
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );
    //story Account Balance for Credits:
    const CreditsComponent = () => (
      <Credits
        credits={this.state.creditList}
        addCredit={this.addCredit}
        accountBalance={this.state.accountBalance}
      />
    );
    
    //story Account Balance for Debits:
    const DebitsComponent = () => (
      <Debits
        debits={this.state.debitList}
        addDebit={this.addDebit}
        accountBalance={this.state.accountBalance}
      />
    );
    

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/assignment-3">
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
