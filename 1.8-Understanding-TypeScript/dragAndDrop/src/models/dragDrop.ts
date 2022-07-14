export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}
    
export interface DragTarget {
    dragOverHandle(event : DragEvent): void;
    dropHandler(event : DragEvent): void;
    dragLeaveHandler(event : DragEvent): void;
}