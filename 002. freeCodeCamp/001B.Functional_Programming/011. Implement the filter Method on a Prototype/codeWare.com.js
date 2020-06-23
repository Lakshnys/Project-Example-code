//www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
/**
 * [Details]
You probably know the “like” system from Facebook and other pages.
People can “like” blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.
Implement a function likes :: [String] -> String, which must take in input array,
containing the names of people who like an item. It must return the return the display text as shown in the examles:
 */

/**
  * likes [] //must be "no one likes this"
likes ["Peter"] //must be "Peter likes this"
likes ["Jacob", "Alex"] //must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] //must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] //must be "Alex, Jacob and 2 others like this"
  */
https: function likes1(names) {
    if (names.length === 0) {
        return "no one likes this";
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${
            names.length - 2
        } other like this`;
    }
}
console.log(likes1(["Peter"])); //must be "Peter likes this"

function likes2(names) {
    var templates = [
        "no one likes this",
        "{name} likes this",
        "{name} and {name} like this",
        "{name}, {name} and {name} like this",
        "{name}, {name} and {n} others like this",
    ];
    var idx = Math.min(names.length, 4);

    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === "{name}" ? names.shift() : names.length;
    });
}

console.log(likes2(["Jacob", "Alex"])); //must be "Jacob and Alex like this"

function likes3(names) {
    return {
        0: "no one likes this",
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)];
}

console.log(likes3(["Alex", "Jacob", "Mark", "Max"])); //must be "Alex, Jacob and 2 others like this"
