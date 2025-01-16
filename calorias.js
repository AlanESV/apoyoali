$(function() {
  const foodData = {
    "Tortillas": [
      { name: "CafeconCrema", calorias: 46, grasas: 3.2, sal: 0.1, azucar: 0, carbohidratos: 3.6, medida: "250ml" },
        { name: "CafeExpresso", calorias: 22.5, grasas: 0.5, sal: 0, azucar: 0, carbohidratos: 4.3, medida: "250ml" },
        { name: "Cereal", calorias: 105, grasas: 1.9, sal: 0.4, azucar: 1.2, carbohidratos: 21, medida: "28gr" },
        { name: "Cerveza", calorias: 107.4, grasas: 0, sal: 0, azucar: 0, carbohidratos: 9.1, medida: "250ml" },
        { name: "ChocolateconLeche", calorias: 37, grasas: 2.1, sal: 0, azucar: 3.6, carbohidratos: 4.2, medida: "7gr" },
        { name: "Chorizo", calorias: 455, grasas: 38, sal: 3.1, azucar: 0, carbohidratos: 1.9, medida: "100gr" },
        { name: "ClubSandwich", calorias: 816, grasas: 46, sal: 4.7, azucar: 7.1, carbohidratos: 42, medida: "349gr" },
        { name: "CocaCola", calorias: 104.7, grasas: 0.6, sal: 0, azucar: 25, carbohidratos: 25.7, medida: "250ml" },
        { name: "CocteldeFrutas", calorias: 181, grasas: 0.2, sal: 0, azucar: 44, carbohidratos: 47, medida: "248gr" },
        { name: "CornFlakes", calorias: 100, grasas: 0.1, sal: 0.5, azucar: 2.7, carbohidratos: 24, medida: "28gr" },
        { name: "CremaBatida", calorias: 34, grasas: 3.6, sal: 0, azucar: 0.3, carbohidratos: 0.3, medida: "10gr" },
        { name: "CremadeCafé", calorias: 19, grasas: 1.9, sal: 0, azucar: 0.4, carbohidratos: 0.3, medida: "10gr" },
        { name: "Dumplings", calorias: 74, grasas: 1.7, sal: 0.7, azucar: 0.5, carbohidratos: 12, medida: "32gr" },
        { name: "Empanada", calorias: 744, grasas: 41, sal: 2.4, azucar: 4.1, carbohidratos: 69, medida: "222gr" },
        { name: "Ensalada", calorias: 20, grasas: 0.2, sal: 0.1, azucar: 1.8, carbohidratos: 4.2, medida: "85gr" },
        { name: "BarradeHelado", calorias: 166, grasas: 12, sal: 0.1, azucar: 9.2, carbohidratos: 12, medida: "50gr" },
        { name: "BarritadeGranola", calorias: 117, grasas: 4.6, sal: 0.2, azucar: 8.1, carbohidratos: 20, medida: "30gr" },
        { name: "BatidoVerde", calorias: 130, grasas: 1.8, sal: 0.1, azucar: 16, carbohidratos: 29, medida: "250ml" },
        { name: "BebidaEnergética", calorias: 157, grasas: 0, sal: 0.3, azucar: 35, carbohidratos: 38, medida: "250ml" },
        { name: "Tocino", calorias: 164, grasas: 12, sal: 1.5, azucar: 0, carbohidratos: 0.6, medida: "35gr" },
        { name: "Bistec", calorias: 614, grasas: 41, sal: 0.3, azucar: 0, carbohidratos: 0, medida: "221gr" },
        { name: "Tortadepierna", calorias: 873, grasas: 42, sal: 4, azucar: 8.5, carbohidratos: 69, medida: "308gr" },
        { name: "CacaoSoluble", calorias: 20, grasas: 0.1, sal: 0, azucar: 4.1, carbohidratos: 4.5, medida: "5gr" },
        { name: "AtuneenAgua", calorias: 128, grasas: 3, sal: 0.9, azucar: 0, carbohidratos: 0, medida: "100gr" },
        { name: "Azucar", calorias: 20, grasas: 0, sal: 0, azucar: 5, carbohidratos: 5, medida: "5gr" },
        { name: "Estevia", calorias: 0, grasas: 0, sal: 0, azucar: 0, carbohidratos: 5, medida: "5gr" },
        { name: "EnsaladaGriega", calorias: 400, grasas: 33, sal: 2.1, azucar: 9.4, carbohidratos: 17, medida: "355gr" },
        { name: "EspaguetisalaBoloñesa", calorias: 666, grasas: 22, sal: 1.6, azucar: 14, carbohidratos: 84, medida: "660gr" },
        { name: "FiletedeCerdo", calorias: 438, grasas: 26, sal: 0.3, azucar: 0, carbohidratos: 0, medida: "342gr" },
        { name: "Milanesa", calorias: 612, grasas: 32, sal: 1.7, azucar: 2.4, carbohidratos: 37, medida: "342gr" },
        { name: "Flan", calorias: 145, grasas: 4, sal: 0.1, azucar: 23, carbohidratos: 23, medida: "100gr" },
        { name: "GalletaconTrocitosdeChocolate", calorias: 148, grasas: 7.4, sal: 0.2, azucar: 9.9, carbohidratos: 20, medida: "30gr" },
        { name: "GalletaMaria", calorias: 120, grasas: 2.1, sal: 0.1, azucar: 8.3, carbohidratos: 23.1, medida: "30gr" },
        { name: "Hamburguesa", calorias: 540, grasas: 27, sal: 2, azucar: 0, carbohidratos: 40, medida: "226gr" },
        { name: "HamburguesadeQuesoconTocino", calorias: 595, grasas: 33, sal: 3.6, azucar: 9.8, carbohidratos: 40, medida: "211gr" },
        { name: "Huevo", calorias: 72, grasas: 4.8, sal: 0.2, azucar: 0.2, carbohidratos: 0.4, medida: "50gr" },
        { name: "Jamon", calorias: 14, grasas: 0.5, sal: 0.5, azucar: 0, carbohidratos: 0.1, medida: "14gr" },
        { name: "Catsup", calorias: 5.1, grasas: 0, sal: 0.1, azucar: 1.1, carbohidratos: 1.4, medida: "5gr" },
        { name: "Lasaña", calorias: 602, grasas: 32, sal: 3.9, azucar: 11, carbohidratos: 35, medida: "385gr" },
        { name: "Leche", calorias: 157, grasas: 8.4, sal: 0.3, azucar: 13, carbohidratos: 12, medida: "250ml" },
        { name: "LechedeSoja", calorias: 106, grasas: 4.2, sal: 0.3, azucar: 6.4, carbohidratos: 8.5, medida: "250ml" },
        { name: "MacarronesconQueso", calorias: 376, grasas: 16, sal: 1.7, azucar: 8.5, carbohidratos: 47, medida: "198gr" },
        { name: "Mango", calorias: 99, grasas: 0.6, sal: 0, azucar: 23, carbohidratos: 25, medida: "165gr" },
        { name: "MantecadeCerdo", calorias: 46.8, grasas: 5.2, sal: 0, azucar: 0, carbohidratos: 0, medida: "5gr" },
        { name: "Mantequilla", calorias: 38, grasas: 4.4, sal: 0.1, azucar: 0, carbohidratos: 0, medida: "5gr" },
        { name: "AceiteVegetal", calorias: 49.6, grasas: 5.6, sal: 0, azucar: 0, carbohidratos: 0, medida: "5ml" },
        { name: "Manzana", calorias: 95, grasas: 0.3, sal: 0, azucar: 19, carbohidratos: 25, medida: "182gr" },
        { name: "Mayonesa", calorias: 38, grasas: 4, sal: 0.1, azucar: 0, carbohidratos: 0, medida: "5gr" },
        { name: "MermeladadeFresa", calorias: 14, grasas: 0, sal: 0, azucar: 2.4, carbohidratos: 3.5, medida: "5gr" },
        { name: "Mostaza", calorias: 3, grasas: 0.2, sal: 0.1, azucar: 0.1, carbohidratos: 0.3, medida: "5gr" },
        { name: "Muffin", calorias: 424, grasas: 18, sal: 1, azucar: 36, carbohidratos: 60, medida: "113gr" },
        { name: "PatatasFritasdeBolsa", calorias: 149, grasas: 9.5, sal: 0.4, azucar: 0.1, carbohidratos: 15, medida: "28gr" },
        { name: "PescadoFrito", calorias: 199, grasas: 12, sal: 0.6, azucar: 0, carbohidratos: 7, medida: "87gr" },
        { name: "PizzadePepperoni", calorias: 313, grasas: 13, sal: 1.9, azucar: 3.6, carbohidratos: 35, medida: "111gr" },
        { name: "PizzadeQueso", calorias: 285, grasas: 10, sal: 1.6, azucar: 3.8, carbohidratos: 36, medida: "285gr" },
        { name: "Platano", calorias: 105, grasas: 0.4, sal: 0, azucar: 14, carbohidratos: 27, medida: "118gr" },
        { name: "RamenMaruchan", calorias: 278, grasas: 12, sal: 1.2, azucar: 1.9, carbohidratos: 36, medida: "364gr" },
        { name: "RosquillaKrispyKreme", calorias: 253, grasas: 14, sal: 0.5, azucar: 14, carbohidratos: 29, medida: "60gr" },
        { name: "Sal", calorias: 0, grasas: 0, sal: 5, azucar: 0, carbohidratos: 0, medida: "5gr" },
        { name: "TeNegro", calorias: 2.5, grasas: 0, sal: 0, azucar: 0, carbohidratos: 0.8, medida: "250ml" },
        { name: "TortilladeMaiz", calorias: 52, grasas: 0.7, sal: 0, azucar: 0.2, carbohidratos: 11, medida: "24gr" },
        { name: "TortilladeHarina", calorias: 159, grasas: 3.5, sal: 0.6, azucar: 0, carbohidratos: 27, medida: "49gr" },
        { name: "ZumodeNaranja", calorias: 118, grasas: 0.5, sal: 0, azucar: 22, carbohidratos: 27, medida: "250ml" }
    ]
  };

  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate({ left: activeState ? "0%" : "-100%" }, 400);
  }

  $("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list").find(".accordion-toggle").click(function() {
    $(this).next().toggleClass("open").slideToggle("fast");
    $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

    $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
    $(".menu-list .accordion-toggle").not($(this)).removeClass("active-tab").find(".menu-link").removeClass("active");

    // Mostrar información del submenu activo
    var submenuTitle = $(this).find(".menu-link").text();
    var submenuInfo = $(this).next(".accordion-content").html();
    $("#submenu-info").html(`<h3>${submenuTitle}</h3>${submenuInfo}`).slideDown("fast");
  });

  $(".submenu-link").click(function(event) {
    event.preventDefault(); // Prevenir comportamiento por defecto del enlace
    var title = $(this).data("title");
    var image = $(this).data("img");
    var imgSrc = `${image}.jpg`; // Generar dinámicamente el nombre de la imagen
    $("#submenu-detail").html(`
      <h2>${title}</h2>
      <img src="${imgSrc}" alt="${title}" class="img-tamano-fijo">
      <div>
        <input type="checkbox" id="add-${title}" class="add-item-checkbox">
        <label for="add-${title}">Añadir</label>
      </div>
    `).slideDown("fast");

    // Comprobar si ya está añadido
    if ($(`#added-items-list li[data-title="${title}"]`).length > 0) {
      $(`#add-${title}`).prop('checked', true);
    }

    // Manejar clic en el checkbox de añadir
    $(`#add-${title}`).change(function() {
      if (this.checked) {
        // Añadir ítem a la lista de añadidos
        $("#added-items-list").append(`<li data-title="${title}">${title}</li>`);
      } else {
        // Eliminar ítem de la lista de añadidos
        $(`#added-items-list li[data-title="${title}"]`).remove();
      }

      // Mostrar u ocultar el div de items añadidos
      if ($("#added-items-list li").length > 0) {
        $("#added-items").slideDown("fast");
      } else {
        $("#added-items").slideUp("fast");
      }

      // Recalcular la nutrición al cambiar la selección
      calculateNutrition();
    });

    // Mostrar el div de items añadidos si hay items
    if ($("#added-items-list li").length > 0) {
      $("#added-items").slideDown("fast");
    }

    // Calcular nutrición al cargar un nuevo submenú
    calculateNutrition();
  });

  function calculateNutrition() {
    // Obtener nombres de alimentos seleccionados y normalizarlos
    const selectedFoods = Array.from($("#added-items-list li")).map(li => normalizeName($(li).data("title")));

    let totalCalories = 0, totalFats = 0, totalSalt = 0, totalSugar = 0, totalCarbs = 0;

    // Iterar sobre los alimentos seleccionados
    selectedFoods.forEach(foodName => {
        const food = foodData["Tortillas"].find(f => normalizeName(f.name) === foodName);
        if (food) {
            totalCalories += food.calorias;
            totalFats += food.grasas;
            totalSalt += food.sal;
            totalSugar += food.azucar;
            totalCarbs += food.carbohidratos;
        } else {
            console.warn(`No se encontró: ${foodName}`);
        }
    });

    // Actualizar resultados
    $("#results").html(`
        <h2>Resultados de la Nutrición</h2>
        <p>Calorías totales: ${totalCalories}</p>
        <p>Grasas totales: ${totalFats}g</p>
        <p>Sal total: ${totalSalt}g</p>
        <p>Azúcar total: ${totalSugar}g</p>
        <p>Carbohidratos totales: ${totalCarbs}g</p>
        <p>${getRecommendations(totalCalories, totalFats, totalSalt, totalSugar, totalCarbs)}</p>

        
    `);
    
}

function normalizeName(name) {
  return name
      .toLowerCase() // Convertir todo a minúsculas
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quitar acentos
      .trim() // Eliminar espacios al inicio y al final
      .replace(/\s+/g, " "); // Reemplazar múltiples espacios por uno solo
}

function getRecommendations(calories, fats, salt, sugar, carbs) {
  const recommendedCalories = 2000;
  const recommendedFats = 70;
  const recommendedSalt = 6;
  const recommendedSugar = 50;
  const recommendedCarbs = 300;

  let recommendations = "";

  if (calories > recommendedCalories) {
      recommendations += "Has excedido la ingesta diaria recomendada de calorías. Para reducir el consumo calórico, elige alimentos menos procesados y controla las porciones.<br>";
  }
  if (fats > recommendedFats) {
      recommendations += "Has excedido la ingesta diaria recomendada de grasas. Opta por grasas saludables como el aceite de oliva y limita las grasas saturadas.<br>";
  }
  if (salt > recommendedSalt) {
      recommendations += "Has excedido la ingesta diaria recomendada de sal. Reducir el consumo de sal puede ayudar a prevenir la hipertensión arterial. Intenta utilizar especias para dar sabor en lugar de sal.<br>";
  }
  if (sugar > recommendedSugar) {
      recommendations += "Has excedido la ingesta diaria recomendada de azúcar. El exceso de azúcar puede contribuir al aumento de peso y enfermedades metabólicas. Reduce los refrescos y postres azucarados.<br>";
  }
  if (carbs > recommendedCarbs) {
      recommendations += "Has excedido la ingesta diaria recomendada de carbohidratos. Reduce alimentos como panes blancos y pastas, y elige opciones integrales.<br>";
  }

  if (!recommendations) {
      recommendations = "¡Estás dentro de los límites recomendados! Mantén un balance incluyendo frutas, verduras y proteínas magras en tus comidas.";
  }

  return recommendations;
}


});