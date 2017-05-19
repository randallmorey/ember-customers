const data = [
  [1, 'Hannah Abbott', 'hannah.abbott@hufflepuff.org', '+1 800 123 4567', '1 Main St', 'Villagandria', 'ME', '12345'],
  [2, 'Katie Bell', 'katie.bell@gryffindor.org', '+1 888 893 2094', '2 Any Rd', 'Somewheringtonshire', 'NH', '48391'],
  [3, 'Michael Corner', 'michael.corner@ravenclaw.org', '+1 899 920 3851', '3 Some Dr', 'Hamlette', 'VT', '34893-0001']
]
export default data.map((d) => {
  return {
    id: d[0],
    name: d[1],
    email: d[2],
    tel: d[3],
    streetAddress: d[4],
    locality: d[5],
    region: d[6],
    postalCode: d[7]
  }
});
