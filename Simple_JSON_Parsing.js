var catalog = 
{
    "products": [
        {
            "name": "prod 1",
            "versions": [
                "ver 1",
                "ver 2"
            ]
        },
        {
            "name": "prod 2",
            "versions": [
                "ver 1",
                "ver 2"
            ]
        }
    ]
};

for(var i = 0; i < catalog.products.length; i++)
{
    var product = catalog.products[i];

    var productName = product.name;
    alert(productName);
    
    for(var j = 0; j < product.versions.length; j++)
    {
        var version = product.versions[j];
        alert(version);
    }
}
