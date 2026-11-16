const photos = ['photo-1565299624946-b28f40a0ae38','photo-1568901346375-23c9450c58cd','photo-1546069901-ba9599a7e63c','photo-1555396273-367ea4eb4db5','photo-1551218808-94e220e084d2','photo-1563379926898-05f4575a45d8','photo-1552566626-52f8b828add9','photo-1547592180-85f173990554'];
const types = [
 ['La Piazza Rosa','Italian','Hand-stretched pizza, sunlit simplicity.',['Truffle Margherita','Burrata & basil','Crispy pancetta']],
 ['Bowl Theory','Healthy','Colourful bowls, made from good things.',['Miso salmon bowl','Green goddess bowl','Crispy tofu bowl']],
 ['Seoul Kitchen','Korean','A little Seoul, around the corner.',['Korean fried chicken','Bibimbap bowl','Kimchi ramen']],
 ['Luna Sushi','Japanese','Fresh cuts and late-night cravings.',['Salmon nigiri set','Spicy tuna roll','Miso aubergine']],
 ['Taco Loco','Mexican','Bright, bold and made to share.',['Birria tacos','Charred corn bowl','Baja fish tacos']],
 ['Maison Crêpe','French','Golden edges and soft centres.',['Mushroom galette','Salted caramel crêpe','Croque monsieur']],
 ['Bombay Social','Indian','Slow spices. Fast favourites.',['Butter chicken','Paneer tikka bowl','Mango dal']],
 ['Burger Atelier','Burgers','The good kind of messy.',['Atelier smash burger','Truffle fries','Crispy chicken burger']],
 ['Pho & Friends','Vietnamese','Big bowls of comfort.',['Beef pho','Lemongrass chicken','Summer rolls']]
];
const areas=['Old Town','Riverside','North Quarter','Market District','West End','Green Park'];
export const restaurants = Array.from({length:54},(_,i)=>{const t=types[i%types.length], n=Math.floor(i/types.length)+1;return {id:i+1,name:n===1?t[0]:`${t[0]} ${n}`,cuisine:t[1],description:t[2],area:areas[i%areas.length],rating:(4.5+(i%5)/10).toFixed(1),time:`${18+i%5*5}–${32+i%4*4} min`,fee:i%4?'€1.49':'Free delivery',image:`https://images.unsplash.com/${photos[i%photos.length]}?auto=format&fit=crop&w=900&q=85`,menu:t[3].map((name,j)=>({id:(i+1)*10+j,name,description:['A signature house favourite with bright, seasonal ingredients.','Made fresh to order with a little extra magic.','Deeply satisfying, beautifully balanced and generous.'][j],price:8.9+j*2.6,image:`https://images.unsplash.com/${photos[(i+j+2)%photos.length]}?auto=format&fit=crop&w=700&q=80`}))}});
export const categories=['All','Pizza','Burgers','Sushi','Healthy','Asian','Desserts','Coffee'];
