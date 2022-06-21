function calculator() {
    
    var num = '';
    var ops = [];
    var value;

    function op(){
        
        var operator = '';
        
        if (ops.length == 1 && !isNaN(ops[0])){
            value = ops[0];
            ops = [];
            num = '';
            return value;
        }

        ops.forEach(element => {

            if(!isNaN(element)){
                if (value == undefined) value = element;
                
                if(operator!=''){
                    value = makeOp(operator, Number(value), Number(element));
                }
            } else{
                if (value == undefined) {
                    num = '';
                    ops = []
                    return "ERR1"
                }
                operator = element;
            }

        });

        if (!Number.isFinite(value)) {
            num = '';
            ops = []
            value = undefined;
            return "ERR2"
        }
        num = ''; 
        ops = []
        return value;

    }

    function makeOp(opr, val1,val2){

        if (opr == undefined || val1 == '' || val2 == '')
            return "ERR";
        
        switch (opr) {
            case '*':
                 return val1 * val2;
                break;
        
                case '/':
                    return val1 / val2;
                    break;
                    
                    case '+':
                        return val1 + val2;
                        break;

                        case '-':
                            return val1 - val2;
                            break;
        }
    }

    return {
        number ( key ) {  num += key; return key },
        plus() { ops.push(num,'+'); num = ''; return '+' },
        min() { ops.push(num,'-'); num = ''; return '-' },
        eq() { ops.push(num); return op(); },
        mult() { ops.push(num,'*'); num = ''; return '*' },
        div() { ops.push(num,'/'); num = ''; return '/'  },
    };
}

function useCalc(calc,keys) {
    keys = [...keys];
    var functions = {
        '*' : 'mult',
        '/' : 'div',
        '-' : 'min',
        '+' : 'plus',
        '=' : 'eq',
    }
    var op = '';
    keys.forEach(key => {
        let consulta = functions[key]|| 'number';
        consulta = calc[consulta](key);
        key=='='?op+='=':0;
        op += consulta;
    });
    return op;
}

export { calculator, useCalc };