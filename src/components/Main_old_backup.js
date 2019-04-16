import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>

        <div className="listofthings">
        <h4><ul className="Intro"><li>I don’t make up user’s needs - <b>I obtain them from surveys and interviews</b> </li>
            <li>I don’t design for the sake of designing -<b> I design to solve a real problem</b> </li>
            <li>I don’t design according to how I think -<b> I design according to data</b> </li>
            <li>I don’t argue with my teammates - <b> We build prototypes and watch how users behave</b> </li>
          </ul> </h4>

If you wish to see this case study on Behance instead, click <a href="https://www.behance.net/Ksandarp">here</a>.

          <hr>
          </hr>
        </div>

<h1>PROBLEM STATEMENT</h1>
<img className='articleimg' style={{width:400}}   src="https://i.imgur.com/HF0PPc7.png"/>

<div  style={{background-color:#cccccc}}>
<p>Every projects starts by defining what the client wants us to achieve by designing him either a webapp or iOs/Android app. We do this by conducting an interview with him. We consider this first step done once we can define clearly a <b> real problem we can have a solution to.</b>
<p></p>
<blockquote> Our client is a gym chain called <i>McHealthy</i> which has various locations in Northern Italy. It seems that their issue is that their personal trainers want an easier way to manage all of their clients. This work is now done by using Messaging Apps such as Messenger and Whatsapp, with workouts printed on paper and each trainer keeps a personal list of his clients in various formats: as google drive documents, written on paper or not even recorded somewhere. They lament that there is a lot of confusion when one of their trainers goes on vacation and someone else has to manage their clients. </blockquote>
</p></div>



<h2>Competitive Benchmark</h2>
<img className='articleimg' style={{width:400}}   src="https://i.imgur.com/489QYg2.png"/>
<p>Our first job should be check what is doing the competition in the situation the client’s idea isn’t really innovative and has been already done  - or if there similar enough ideas from which we can draw some inspiration. Big companies such as Google, Amazon or Facebook will be always the first thing everyone will compare our project to - so it’s an important concept to keep in mind during the whole process. 
<p></p>
<blockquote>We google ‘apps for personal trainers and clients’. There are several results, most of which are iOS apps. A software called Vagaro has some integrations with Facebook/Instagram, but it looks its purpose is bookings for salons rather than a client’s management. We also take note of their pricing methods and which type of premium model they offer. After that we check the Play Store and we can found an app called FitSW. It looks like an app aimed to personal trainers and the UI seems confusing - maybe we can improve it? What if we integrate a way for the clients to speak to their trainers through the app?  </blockquote> </p>


<h1>USER RESEARCH</h1>

<img className='articleimg'src="https://i.imgur.com/99q8xEL.png"/>

<p>In this phase we need to do surveys and interviews with our users. We also have additional tools which we can use - such as creating one or multiple <b>User Personas</b>, which will help everyone involved in this project to keep them focused at who the app is aimed to. We can use <b>User Stories</b> to help us define how the app should be actually built and what it should allow the users to do. 
<p></p>
<blockquote>
We interviewed 5 personal trainer and 10 people interested in personal trainer services, since only one person was available, each session was recorded in order to be analyzed later.  

We try to don’t railroad the questions too much - letting the potential users express themselves and even make their own questions lets us explore new ideas. For this very reason it’s harder or even useless to extract from it some numerical data. Instead we gather the responses and make a <b>Word cloud</b> or a <b>Mind map</b> out of it. 

With this information we create three personas, one will be Bruno, the Personal Trainer; another one will be Luke the Lazy Guy and the last one will be John the Motivated Guy.  
</blockquote> 


</p>

<h1>WIREFRAMING</h1>


<p>As we are getting a better idea on how this app should work, we need to get our attention on how exactly these actions should be executed. Before even trying to define them on our own, some Pattern Benchmarking is required. 

This involves simply two things: first we must consider to which patterns the users is used to, taking in consideration how most simple actions are done on iOs, Android or other systems. Trying to stick the patterns of our app to those that the user is accustomed should be the first priority. For this websites like  
<a href="https://material-ui.com"> material-ui</a> or <a href="https://pttrns.com">pttrns.com</a> are useful tools. 

Another one is to consider pattern used by large companies. Users are accustomed also to those, so if we try to do something radically different we should be aware of those differences. 

<p></p>
<blockquote>Regarding our app, since we are developing for Android we will follow all the Material-Ui recommended patterns and guidelines.  Since we are also making a fitness related app, we could also follow all the patterns used by apps like MyFitnessPal and be sure that our users will not feel alienated. We can also consider not related apps by theme, but by use. Ours app is similar to those used by teachers to manage their students - maybe some inspiration can be found in those. </blockquote></p>


<h2>SKETCHING</h2>
<img className='articleimg'  style={{width:400}} src="https://i.imgur.com/RSG73MK.png"/>

<p>We understood some of the basic patterns our app should follow - so we start sketching some of the main screens it should have. I can either simple tools such a pen and paper or If I have to share with others I can use one of the many webapps available online.  We have one at our disposal now: <b>‘Card Sorting’.</b> We can use this to define how our webapp should be organized or what users prioritize as the most important action to them - its pro is that its easy to setup but it requires some people which ... needs to sort those cards.
<p></p>
<blockquote>We start defining our app by deciding that it will have a Login screen, the Main which will change depending if the user is a Trainer or a Trainee. An harmburger button at the top left will lets access to multiple options for the Trainers. The app will be focused on the Trainers and Trainee communication, so it should feel similar to a chat app like Whatsapp or Telegram. We use Card Sorting with 10 people to decide in which order will things pop-up from the hamburger menu.   
</blockquote></p>


<h1>PROTOTYPING</h1>

<img className='articleimg' src="https://i.imgur.com/8gNleCN.pngg"/>

<p>We defined what our app should do and its whole structure is defined. It’s probably the best time to make sure our client is liking what our team has came up with - even though we should always be in contact with him 24/7. We should open our Sketch apps or analogue software and start recreating our wireframes with a nicer UI. Following Material-UI or Human Interface guidelines should be accounted, as the most recent trends. A quick search on Pinterest should be done just to be sure to not design something out of place. 
<p></p>
<blockquote>In this case study our client is a national gym chain that needs an android app which will help the trainers follow their clients. This app will also help the clients remind them of their trainings and workouts routines.</blockquote></p>

<h2>Keep doing tests and make new prototypes</h2>

<p>When we made a functioning low-fidelity wireflow, we can implement again some research and data gathering in order to improve our prototype. We can repeat this process as many times we want, time and resources permitted. Here are some examples of what we can use:

    <ul><li><b>Usability Test. </b> The most important tool at our arsenal. How can we achieve a working and useful app if we don’t even make sure that the user can… use it? This test its simply. Take an user, put in front of your app and watch it how he interacts with it. Take notes by writing them down or recording him. If we are feeling fancy we can implement some Eye Tracking to have even more data. 
</li>
            <li><b>Expert Review.</b>  We can send our prototype to someone else with probably a more objective point of view and suggest some changes or not.
</li>
            <li><b>Field Studies.</b>  We make additional interviews, surveys, researches - this time with more specific enquiries. 
</li>
          </ul>
</p>
<p></p>


<h1>PRESENTATION</h1>


<p>It’s time to go as fancy as possible and pimp up your prototype. It’s time to be a Visual Designer and start making mockups and high fidelity wireflows of your app. Every bit of information we gathered along the way should be condensed in this document - which will explain every single choice we made. It’s at this point that we will have the story of this app and how it was born from a simple idea and became something *physical* among us. Even if the project didn’t came up as we thought, we have to sell it as the magnum opus of our career. 
<p></p>
<blockquote>We take our prototypes and make a <i>high-fidelity Wireflow</i> - which its just a prototype with the ultimated UI and each decision taken during our project motivate through data. Using numbers its usually the best idea, but in some cases qualitive data works best for those clients that want to hear a <i>good story</i>.</blockquote></p>


<h1>AFTER THOUGHTS</h1>


<p>After the project is considered finished - writing done what lessons we learned and what we would change if we could start over is a good idea. Rereading our past studies and add annotiations taking in consideration what new tools and techniques we learned would be a good idea. </p>
<p></p>



          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>



          <h2 className="major">About me</h2>
    <p></p>

      <img className="avatar" src="https://i.imgur.com/eTGEgCn.png"/>
      <p></p> 
       <p></p>


     <p>My name is Aleksandar and I'm an UX Designer in learning. I have some bits of programming knowledge as I tackled a little with React and various libraries. I also studied for some years Computer Science.  My passion is making <a href="https://baldrsglade.bandcamp.com/"> music </a> and playing D&D. Currently I'm living in Northern Italy, but I have no issues with moving around the globe.</p>
            {close}
        </article>


          <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none'}}>
            <h2 className="major">Contacts</h2>

            <div style={{float:'middle'}}>
           <a href="mailto:aleksandarpetrovic101@gmail.com">aleksandarpetrovic101@gmail.com</a>

              <ul className="icons">
                <li><a href="https://twitter.com/aledarpetr" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/ramingau/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/a-petrovic/" className="icon fa-linkedin"><span className="label">GitHub</span></a></li>
                <li><a href="https://github.com/adunis" className="icon fa-github"><span className="label">GitHub</span></a></li>

              </ul>
</div>
     
            {close}
          </article>

      </div>
        )
      }
    }
    
Main.propTypes = {
          route: PropTypes.object,
        article: PropTypes.string,
        articleTimeout: PropTypes.bool,
        onCloseArticle: PropTypes.func,
        timeout: PropTypes.bool,
        setWrapperRef: PropTypes.func.isRequired,
      }
      
export default Main