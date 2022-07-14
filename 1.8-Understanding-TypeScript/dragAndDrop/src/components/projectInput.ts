
import { autobind } from '../decorators/autobind'
import { projectState } from '../state/projectState';
import { Validatable, validate } from '../util/validation';
import { Component } from './baseComponent'

    export class ProjectInput extends Component <HTMLDivElement, HTMLFormElement> {
        titleInputElement: HTMLInputElement;
        descriptionInputElement: HTMLInputElement;
        peopleInputElement: HTMLInputElement;
    
        constructor() {
            super('project-input', 'app', true,'user-input');
    
            this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
            this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
    
            this.configure();
        }
    
        @autobind
        configure(){
            this.element.addEventListener('submit', this.submitHandler)
        }
    
        renderContent(){}
        
        private gatherUserInput(): [string, string, number] | void {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = this.peopleInputElement.value;
            
            const validateTitle : Validatable = {
                value: enteredTitle,
                required: true,
            }
    
            const validateDescription : Validatable = {
                value: enteredDescription,
                required: true,
                minLength : 5,
            }
    
            const validatePeople : Validatable = {
                value: +enteredPeople,
                required: true,
                min : 1,
            }
            
            if( !validate(validateTitle) || !validate(validateDescription) || !validate(validatePeople) )
            {
                alert('Invalid input, try again.');
                return;
            } else {
                return [enteredTitle, enteredDescription, +enteredPeople]
            }
        }
        
        private clearInputs(){
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }
        @autobind
        private submitHandler(){
            event?.preventDefault();
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                projectState.addProject(title, desc, people);
                this.clearInputs()
            }
        }
    }
