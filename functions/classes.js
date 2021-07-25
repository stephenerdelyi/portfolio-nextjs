export default function Classes(items) {
    var classText = '';

    items.forEach((item) => {
        if(typeof item[0] === 'object' && item[0] !== null) {
            //use stylesheet reference
            item[1].forEach((className) => {
                if(Object.keys(item[0]).includes(className)) {
                    classText += ' ' + item[0][className];
                }
            })
        } else {
            //use regular reference
            item.forEach((className) => {
                classText += ' ' + className;
            });
        }
    });

    return classText;
}
