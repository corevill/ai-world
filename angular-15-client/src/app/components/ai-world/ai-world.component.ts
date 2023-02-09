import { Component } from '@angular/core';
// var bot = require('./../../../assets/bot.svg');
// var user = require('./../../../assets/user.svg');

@Component({
  selector: 'app-ai-world',
  templateUrl: './ai-world.component.html',
  styleUrls: ['./ai-world.component.css']
})
export class AiWorldComponent {
  
  form:any = document.querySelector('form');
  chatContainer:any = document.querySelector('#chat_container');
  loadInterval:any;
  
  // constructor() {
  //   this.form.addEventListener('submit', this.handleSubmit)
  //   this.form.addEventListener('keyup', (e:any) => {
  //       if (e.keyCode === 13) {
  //           this.handleSubmit(e);
  //       }
  //   })
  // }
  
  // loader(element:any) {
  //     element.textContent = ''
  
  //     this.loadInterval = setInterval(() => {
  //         // Update the text content of the loading indicator
  //         element.textContent += '.';
  
  //         // If the loading indicator has reached three dots, reset it
  //         if (element.textContent === '....') {
  //             element.textContent = '';
  //         }
  //     }, 300);
  // }
  
  // typeText(element:any, text:any) {
  //     let index = 0
  
  //     let interval = setInterval(() => {
  //         if (index < text.length) {
  //             element.innerHTML += text.charAt(index)
  //             index++
  //         } else {
  //             clearInterval(interval)
  //         }
  //     }, 20)
  // }
  
  // // generate unique ID for each message div of bot
  // // necessary for typing text effect for that specific reply
  // // without unique ID, typing text will work on every element
  // generateUniqueId() {
  //     const timestamp = Date.now();
  //     const randomNumber = Math.random();
  //     const hexadecimalString = randomNumber.toString(16);
  
  //     return `id-${timestamp}-${hexadecimalString}`;
  // }
  
  // chatStripe(isAi:any, value:any, uniqueId:any) {
  //     return (
  //         `
  //         <div class="wrapper ${isAi && 'ai'}">
  //             <div class="chat">
  //                 <div class="profile">
  //                     <img 
  //                       src=${isAi ? 'bot' : 'user'} 
  //                       alt="${isAi ? 'bot' : 'user'}" 
  //                     />
  //                 </div>
  //                 <div class="message" id=${uniqueId}>${value}</div>
  //             </div>
  //         </div>
  //     `
  //     )
  // }
  
  // handleSubmit = async (e:any) => {
  //     e.preventDefault()
  
  //     const data = new FormData(this.form)
  
  //     // user's chatstripe
  //     this.chatContainer.innerHTML += this.chatStripe(false, data.get('prompt'), null)
  
  //     // to clear the textarea input 
  //     this.form.reset()
  
  //     // bot's chatstripe
  //     const uniqueId = this.generateUniqueId()
  //     this.chatContainer.innerHTML += this.chatStripe(true, " ", uniqueId)
  
  //     // to focus scroll to the bottom 
  //     this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
  
  //     // specific message div 
  //     const messageDiv = document.getElementById(uniqueId)
      
  //     if(!messageDiv)return;

  //     // messageDiv.innerHTML = "..."
  //     this.loader(messageDiv)
  
  //     const response = await fetch('https://codex-im0y.onrender.com/', {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //             prompt: data.get('prompt')
  //         })
  //     })
  
  //     clearInterval(this.loadInterval)
  //     messageDiv.innerHTML = " "
  
  //     if (response.ok) {
  //         const data = await response.json();
  //         const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 
  
  //         this.typeText(messageDiv, parsedData)
  //     } else {
  //         const err = await response.text()
  
  //         messageDiv.innerHTML = "Something went wrong"
  //         alert(err)
  //     }
  // }
}
