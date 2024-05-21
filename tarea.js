function registrarTarea() {
    const nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
      alert("Por favor ingresa el nombre de la tarea.");
      return;
    }
  
    const tarea = { descripcion: nombre, completada: false };
  
    fetch('http://localhost:3000/tareas/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    })
    .then(response => {
      if (response.ok) {
        alert("Tarea registrada exitosamente.");
      } else {
        throw new Error("Error al registrar la tarea.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
// Función para obtener y mostrar las tareas existentes
function calcularTarea() {
    fetch("http://localhost:3000/tareas")
    .then(response => response.json())
    .then(data => {
      const listaTareas = data.map(tarea => `<li>${tarea.descripcion}</li>`).join('');
      document.getElementById("total").innerHTML = `<ul>${listaTareas}</ul>`;
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
  
  