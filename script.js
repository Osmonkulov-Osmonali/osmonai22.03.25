    // Поиск по названию запчастей
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Отменяет стандартное поведение формы

    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        
        if (productName.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
