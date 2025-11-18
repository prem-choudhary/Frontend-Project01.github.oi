try {
  // Code that may throw an error
  function testScope() {
    if (true) {
      var x = 10; // function-scoped
      let y = 20; // block-scoped
      const z = 30; // block-scoped
    }
    console.log(x); // Works
    console.log(y); // Error
    console.log(z); // Error
  }
  testScope();
  throw new Error("Something went wrong!");
} catch (err) {
  console.error("Caught error:", err.message);
}