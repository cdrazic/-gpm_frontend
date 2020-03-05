import React, { Component } from 'react';
import '../../App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Home extends Component {
  renderLogoutButton() {
    if (this.state.loginSuccess === true) {
      //change this conditional when login implemented
      return (
        <a href='/home' onClick='logOut()'>
          <button class='button'>Log Out</button>
        </a>
      );
    }
  }

  logOut() {
    //log out function here
  }

  render() {
    return (
      <div class='MainContainer'>
        <div class='banner'></div>

        <div class='ContentContainer'>
          <div class='Content'>
            <h1 className='page-title'>CS Graduate Program Manager</h1>
            <a href='/login'>
              <button class='button'>Log In</button>
            </a>
            {this.renderLogoutButton}
            <a href='/todo'>
              <button className='button'>Todos</button>
            </a>
            <a href='/admin'>
              <button id='bypass' className='button'>
                BYPASS
              </button>
            </a>
            <p>Select the tab for your student status</p>

            <Tabs>
              <TabList>
                <Tab>Prospective Students</Tab>
                <Tab>Current Students</Tab>
              </TabList>
              <TabPanel>
                <h2 class='tabBody'>Info for Prospective Students</h2>
                <p>
                  General Application Questions:
                  <ul>
                    <li>Am I eligible to apply?</li>
                    <li>Do I need a degree in Computer Science to be admitted to the program?</li>
                    <li>Can I apply to start in Winter or Spring quarter?</li>
                    <li>How do I apply? (What documents do I need to submit for my application?)</li>
                    <li>What are the deadlines for the application?</li>
                    <li>(What criteria are used to evaluate applicants for admission to the department?)</li>
                  </ul>

                  Language Proficiency Tests:
                  <ul>
                    <li>Do I need to take the GRE test?</li>
                    <li>Are there minimum GRE scores required for admission and can I submit my GRE scores after the deadline?</li>
                    <li>Do I need to take the TOEFL test? Are there minimum TOEFL/IELTS scores and can I submit my scores after the deadline?</li>
                    <li>When should I take the GRE/TOEFL?</li>
                    <li>I am currently in the CS honors program and thinking to apply for the Graduate Program. How should I apply?</li>
                  </ul>
                  Transfer Questions:
                  <ul>
                    <li>If I already have a MS in CS from another institute, may I apply to the CS MS program at WWU?</li>
                    <li>If I am currently enrolled in a graduate program at another institution. May I apply for the CS MS program at WWU? Are my credits transferable?</li>
                  </ul>
                  If admitted:
                  <ul>
                    <li>If I am admitted to the program, can I defer admission?</li>
                    <li>Can a course I took somewhere else (e.g., an online program) be waived from the prerequisite course list I will be required to take?</li>
                    <li>What are the MS degree requirements?</li>
                    <li>How long does it take to complete the program? Can I complete my degree part time?</li>
                    <li>How can I find out more about course requirements for the CS Master’s program?</li>
                  </ul>
                  Fees and Funding/Financial Support:
                  <ul>
                    <li>What are tuition and fees? What if I’m an international student?</li>
                    <li>Do you offer financial support for MS students?</li>
                  </ul>
                  Recommendation Letters:
                  <ul>
                    <li>How should my recommenders send their letters?</li>
                    <li>I’ve been working for several years and it’s difficult to get 3 letters of recommendation from former professors. Will you accept letters from my employer or supervisors?</li>
                  </ul>
                </p>
                <p>
                  Admissions and program details can be found here:
                  <a href='https://gradschool.wwu.edu/computer-science'>
                    {' '}
                    https://gradschool.wwu.edu/computer-science
                  </a>
                  <br></br>
                  If you are a CS honors student, please follow the normal
                  application procedure to apply to the Graduate Program.
                </p>
                <p>
                  Computer Science Graduate Handbook:
                  <a href='https://cse.wwu.edu/cs/graduate-programs'>
                    {' '}
                    https://cse.wwu.edu/cs/graduate-programs
                  </a>
                </p>
                <p>Further questions? Contact us:</p>
                <p>
                  Yudong Liu, CS Graduate Program Advisor
                  <br></br>
                  Office: CF 483, Phone: 360-650-4831, email:{' '}
                  <a href='mailto:Yudong.Liu@wwu.edu'>Yudong.Liu@wwu.edu</a>
                </p>
                <p>
                  WWU Graduate School
                  <br></br>
                  Office: OM 530, Phone: 360-650-3170
                </p>
              </TabPanel>
              <TabPanel>
                <h2 class='tabBody'>Info for Current Students</h2>
                <p>
                  Academic Resources
                  <ul>
                    <li>I am starting my first quarter. What should I do?</li>
                    <li>How many courses a quarter should I take?</li>
                    <li>What are the basic requirements for the degree?</li>
                    <li>Can the credits I took in BS count toward my MS?</li>
                    <li>As a graduate student, can I take a 400 level course and use it to fulfill my MS degree requirement?</li>
                    <li>What should I do if I want to register for the research course (CSCI 692)?</li>
                    <li>I am planning to graduate next quarter. What is the graduation application and approval process?</li>
                    <li>What should I do if I need to change my plan of study?</li>
                    <li>What should I do if I want to take an independent study?</li>
                    <li>Forms</li>
                  </ul>
                  TAships and other funding opportunities:
                  <ul>
                    <li>Graduate School Teaching Assistant Guidelines</li>
                    <li>What awards are available from the graduate school?</li>
                    <li>What awards are available from the CS department?</li>
                  </ul>
                </p>
                <p>
                  Important to-dos for your first and last quarter: (not done)
                </p>
                <p class='wrap'>
                  For curriculum info and help course planning, visit the
                  Computer Science Graduate Handbook here:
                  <a href='https://cse.wwu.edu/cs/graduate-programs'>
                    {' '}
                    https://cse.wwu.edu/cs/graduate-programs
                  </a>
                </p>
                <ul className='center'>
                  Forms:
                  <li>
                    <a href='https://esign.wwu.edu/forms/Grad_School/_plan_of_study_2.aspx'>
                      Graduate Plan of Study
                    </a>{' '}
                  </li>
                  <li>
                    <a href='https://esign.wwu.edu/forms/Grad_School/_amend_to_grad_plan_of_study_1.aspx'>
                      Amendment to Graduate Plan of Study
                    </a>{' '}
                  </li>
                  <li>
                    <a href='https://esign.wwu.edu/forms/CSCI/_csci_grad_research_proj_1.aspx'>
                      Graduate Research Project Form
                    </a>
                  </li>
                  <li>
                    <a href='https://esign.wwu.edu/forms/Grad_School/_degree_rec_non_thesis_1.aspx'>
                      Degree Recommendation Non-Thesis Option
                    </a>
                  </li>
                  <li>
                    <a href='https://gradschool.wwu.edu/degree-completion'>
                      Application for Degree
                    </a>
                  </li>
                  <li>
                    <a href='https://gradschool.wwu.edu/courses-credits'>
                      Independent Study
                    </a>
                  </li>
                  <br />
                  General Graduate School Info
                  <li>
                    <a href='https://gradschool.wwu.edu/program-requirements-0'>
                      Academic Policies
                    </a>
                  </li>
                  <li>
                    <a href='https://gradschool.wwu.edu/funding-support'>
                      Funding and Support
                    </a>
                  </li>
                </ul>
                <p>Further questions? Contact us:</p>
                <p>
                  Yudong Liu, CS Graduate Program Director
                  <br></br>
                  Office: CF 483, Phone: 360-650-4831, email:{' '}
                  <a href='mailto:Yudong.Liu@wwu.edu'>Yudong.Liu@wwu.edu</a>
                </p>
                <p>
                  WWU Graduate School
                  <br></br>
                  Office: OM 530, Phone: 360-650-3170
                </p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}