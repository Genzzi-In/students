// export default function Add(props) {
//   const a = props.a;
//   const b = props.b;
//   return (
//   <>
//   <p>value a is <b>{a}</b></p>
//   <p>value b is <b>{b}</b></p>
//   <p>addition of a & b is <b>{a+b}</b></p>
//   </>
//   );
// }


// export default function Add(props) {
//     const {a,b} = props
//   return (
//   <>
//   <p>value a is <b>{a}</b></p>
//   <p>value b is <b>{b}</b></p>
//   <p>addition of a & b is <b>{a+b}</b></p>
//   </>
//   );
// }

export default function Add({a=10,b=20}) {

  return (
  <>
  <p>value a is <b>{a}</b></p>
  <p>value b is <b>{b}</b></p>
  <p>addition of a & b is <b>{a+b}</b></p>
  </>
  );
}
