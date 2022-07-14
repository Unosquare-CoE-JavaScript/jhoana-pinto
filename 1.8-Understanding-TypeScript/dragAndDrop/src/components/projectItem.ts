import { Draggable } from '../models/dragDrop'
import { Component } from './baseComponent'
import { autobind } from '../decorators/autobind'
import { Project } from '../models/project'

    export class ProjectItem extends Component <HTMLUListElement, HTMLLIElement> implements Draggable{
        private project : Project;
    
        get People() {
            return this.project.people === 1 ? '1 person assigned' : `${this.project.people} people assigned`
        }
    
        constructor(hostId: string, project: Project) {
            super('single-project', hostId, false, project.id);
            this.project = project;
    
            this.configure();
            this.renderContent();
        }
        @autobind
        dragStartHandler(event: DragEvent){
            event.dataTransfer!.setData('text/plain', this.project.id);
            event.dataTransfer!.effectAllowed = 'move';
        }
    
        dragEndHandler(_event: DragEvent){
            console.log('DragEnd');
            
        }
    
        configure(){
            this.element.addEventListener('dragstart', this.dragStartHandler)
             this.element.addEventListener('dragend', this.dragEndHandler)
        }
    
        renderContent(){
            this.element.querySelector('h2')!.textContent = this.project.title;
            this.element.querySelector('h3')!.textContent = this.People;
            this.element.querySelector('p')!.textContent = this.project.description;
        }
    }