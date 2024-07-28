// import * as named from './script2.js';
// import mul from './script3.js';
import _ from 'lodash'

import axios from 'axios'
// const res = named.add(55,4);
// const result = mul(2,4);
// document.body.append(res)
// document.body.append(named.person.haveBirthday())
// console.log(result);

const arr = ['Apple','Mango','Orange','Apple']
console.log(_.uniq(arr));
console.log(_.without(arr, "Mango"));
axios.get('https://api.github.com/users/githubAmanKumar')
.then(response=>console.log(response.data.name))
.catch(err=>console.log(err));
