const names: Array <string> = ['Jhoana', 'Itzel'];

function merge< T extends object, U extends object>( objA: T, objB: U ){
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age:30});
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element:T){
    let descriptionText = 'Got no value.';
    if(element.length > 1){
        descriptionText = `Got ${element.length} elements`
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi!'));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
){
    return `Value: ${obj[key]}`
}

console.log(extractAndConvert({ name : 'Jhoana' }, 'name'));

interface CourseGoal {
    title : string;
    description : string;
    completeUntil : Date;
}

function createCourseGoal(title : string, description: string, date: Date)
:CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

