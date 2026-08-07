const perfumes = [
  {
    name: "The One EDP",
    brand: "Dolce & Gabbana",
    category: "Diseñador",
    gender: "Hombre",
    price: 72,
    description: "Ámbar, tabaco y especias en una firma cálida y elegante.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=82"
  },
  {
    name: "Libre EDP",
    brand: "Yves Saint Laurent",
    category: "Diseñador",
    gender: "Mujer",
    price: 98,
    description: "Lavanda luminosa, flor de azahar y vainilla sensual.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=82"
  },
  {
    name: "Good Girl",
    brand: "Carolina Herrera",
    category: "Diseñador",
    gender: "Mujer",
    price: 92,
    description: "Un contraste adictivo de jazmín, cacao y haba tonka.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=82"
  },
  {
    name: "Eros EDP",
    brand: "Versace",
    category: "Diseñador",
    gender: "Hombre",
    price: 78,
    description: "Menta fresca, manzana verde y vainilla con gran presencia.",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=82"
  },
  {
    name: "Sauvage EDP",
    brand: "Dior",
    category: "Diseñador",
    gender: "Hombre",
    price: 118,
    description: "Bergamota intensa, pimienta y un fondo ambarado.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=82&sat=-20"
  },
  {
    name: "Acqua di Giò Profondo",
    brand: "Giorgio Armani",
    category: "Diseñador",
    gender: "Hombre",
    price: 94,
    description: "Notas marinas, mandarina verde y maderas aromáticas.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=82&sat=-35"
  },
  {
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    category: "Árabe",
    gender: "Unisex",
    price: 48,
    description: "Café especiado, canela y vainilla en una estela envolvente.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=82&hue=18"
  },
  {
    name: "9PM",
    brand: "Afnan",
    category: "Árabe",
    gender: "Hombre",
    price: 45,
    description: "Manzana, canela y vainilla para noches memorables.",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=82&sat=-15"
  },
  {
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    category: "Árabe",
    gender: "Hombre",
    price: 52,
    description: "Cítricos vibrantes, abedul y musk de larga duración.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=82&con=15"
  },
  {
    name: "Honor & Glory",
    brand: "Bade'e Al Oud",
    category: "Árabe",
    gender: "Unisex",
    price: 43,
    description: "Piña cremosa, cúrcuma y vainilla con carácter exótico.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=82&hue=30"
  },
  {
    name: "Spectre Desert",
    brand: "French Avenue",
    category: "Árabe",
    gender: "Unisex",
    price: 70,
    description: "Cítrico, dulce y atalcado con cuero y pachulí sutiles.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=82&sat=-25"
  },
  {
    name: "Instant Crush",
    brand: "Mancera",
    category: "Nicho",
    gender: "Unisex",
    price: 115,
    description: "Azafrán, rosa, ámbar y vainilla con proyección intensa.",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=82&hue=-10"
  },
  {
    name: "Arabians Tonka",
    brand: "Montale",
    category: "Nicho",
    gender: "Unisex",
    price: 112,
    description: "Rosa, oud, azafrán y tonka en una mezcla opulenta.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=82&hue=12"
  },
  {
    name: "Kirke",
    brand: "Tiziana Terenzi",
    category: "Nicho",
    gender: "Unisex",
    price: 138,
    description: "Frutas exuberantes, lirio y almizcle de tacto sedoso.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=82&sat=10"
  },
  {
    name: "Hacivat",
    brand: "Nishane",
    category: "Nicho",
    gender: "Unisex",
    price: 175,
    description: "Piña brillante, bergamota y musgo de roble sofisticado.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=82&hue=45"
  }
];

const productGrid = document.querySelector("#product-grid");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#product-search");
const sortSelect = document.querySelector("#product-sort");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const resetButton = document.querySelector("#reset-filters");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

let activeCategory = "Todos";

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatPrice(price) {
  return new Intl.NumberFormat("es-PA", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  }).format(price);
}

function getVisiblePerfumes() {
  const searchTerm = normalizeText(searchInput.value);
  const filtered = perfumes.filter((perfume) => {
    const matchesCategory = activeCategory === "Todos" || perfume.category === activeCategory;
    const searchableText = normalizeText(
      `${perfume.name} ${perfume.brand} ${perfume.category} ${perfume.gender} ${perfume.description}`
    );

    return matchesCategory && searchableText.includes(searchTerm);
  });

  return filtered.sort((first, second) => {
    if (sortSelect.value === "price-asc") return first.price - second.price;
    if (sortSelect.value === "price-desc") return second.price - first.price;
    if (sortSelect.value === "name") return first.name.localeCompare(second.name, "es");
    return perfumes.indexOf(first) - perfumes.indexOf(second);
  });
}

function createProductCard(perfume) {
  const message = encodeURIComponent(
    `Hola Bell Aroma, quisiera consultar disponibilidad de ${perfume.name} de ${perfume.brand}.`
  );

  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${perfume.image}" alt="${perfume.name} de ${perfume.brand}" loading="lazy">
        <span class="product-badge">${perfume.category}</span>
      </div>
      <div class="product-content">
        <div class="product-topline">
          <p class="product-brand">${perfume.brand}</p>
          <p class="product-gender">${perfume.gender}</p>
        </div>
        <div class="product-title-row">
          <h3>${perfume.name}</h3>
          <span class="product-price">
            <small>Precio demo</small>
            <strong>${formatPrice(perfume.price)}</strong>
          </span>
        </div>
        <p class="product-description">${perfume.description}</p>
        <div class="product-footer">
          <span class="availability">Consulta disponibilidad</span>
          <a
            class="product-link"
            href="https://wa.me/50762284797?text=${message}"
            target="_blank"
            rel="noopener"
            aria-label="Consultar ${perfume.name} por WhatsApp"
          >
            Consultar <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog() {
  const visiblePerfumes = getVisiblePerfumes();
  productGrid.innerHTML = visiblePerfumes.map(createProductCard).join("");
  resultCount.textContent = `${visiblePerfumes.length} ${visiblePerfumes.length === 1 ? "fragancia" : "fragancias"}`;
  emptyState.hidden = visiblePerfumes.length !== 0;
  productGrid.hidden = visiblePerfumes.length === 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    renderCatalog();
  });
});

searchInput.addEventListener("input", renderCatalog);
sortSelect.addEventListener("change", renderCatalog);

resetButton.addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "featured";
  activeCategory = "Todos";

  filterButtons.forEach((button) => {
    const isAll = button.dataset.category === "Todos";
    button.classList.toggle("is-active", isAll);
    button.setAttribute("aria-pressed", String(isAll));
  });

  renderCatalog();
  searchInput.focus();
});

function setMenu(open) {
  menuToggle.classList.toggle("is-active", open);
  mainNav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}

menuToggle.addEventListener("click", () => {
  setMenu(!mainNav.classList.contains("is-open"));
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) setMenu(false);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderCatalog();
