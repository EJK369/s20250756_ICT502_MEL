// Scroll animations
const sections = document.querySelectorAll('.scroll-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
sections.forEach(sec => observer.observe(sec));

// Trip calculator
const form = document.getElementById('calculatorForm');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    const destination = Number(document.getElementById('destination').value);
    const travellers = Number(document.getElementById('travellers').value);
    const days = Number(document.getElementById('days').value);
    const style = Number(document.getElementById('style').value);

    const cost = destination * travellers * days * style;
    document.getElementById('result').innerText = `Estimated cost: $${cost.toFixed(2)}`;
  });
}

// Simple form validation (appointment/contact)
const forms = ['appointmentForm','contactForm'];
forms.forEach(fid => {
  const f = document.getElementById(fid);
  if(f){
    f.addEventListener('submit', e=>{
      e.preventDefault();
      alert("Form submitted successfully!");
      f.reset();
    });
  }
});
