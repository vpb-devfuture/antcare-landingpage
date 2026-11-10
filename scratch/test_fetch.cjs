async function test() {
  try {
    const res = await fetch('http://localhost:3000/dich-vu');
    console.log('Status:', res.status);
    const text = await res.text();
    console.log('Length:', text.length);
    console.log('Has root:', text.includes('id="root"'));
  } catch (err) {
    console.error('Error:', err.message);
  }
}
test();

