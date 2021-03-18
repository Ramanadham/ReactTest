import React from "react";
const _ = require("lodash");
export default function Loadash() {
	// Code related to Lodash Excersise 2
	//The method will return a new function that will call a given function only once when called
	const add = (a, b) => {
		return a + b;
	};
	const onceAdd = _.once(add);
	console.log(onceAdd(10, 20));
	console.log(onceAdd(2, 2));
	console.log(onceAdd(3, 4));

	//Example 2

	var grab = _.once(function (val) {
		return _.clone(val);
	});

	var obj = { x: 41 };

	obj.x += 1;

	console.log("Ex.2 o/p:", grab(obj)); // {x:42}

	obj.x += 2;

	console.log("Ex.2 o/p:", grab(obj)); // {x:42}e

	return (
		<center>
			<h2> Check the console for the result</h2>
			<code>
				<pre>
					{`
                    	const add = (a, b) => {
                            return a + b;
                        };
                        const onceAdd = _.once(add);
                        console.log(onceAdd(10, 20));
                        console.log(onceAdd(2, 2));
                        console.log(onceAdd(3, 4));
                    
                        //Example 2
                    
                        var grab = _.once(function (val) {
                            return _.clone(val);
                        });
                    
                        var obj = { x: 41 };
                    
                        obj.x += 1;
                    
                        console.log("Ex.2 o/p:", grab(obj)); // {x:42}
                    
                        obj.x += 2;
                    
                        console.log("Ex.2 o/p:", grab(obj)); // {x:42}e

                 `}
				</pre>
			</code>
		</center>
	);
}
