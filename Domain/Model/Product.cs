using System;
using System.Collections.Generic;

namespace Domain.Model;

public partial class Product
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string Model { get; set; } = null!;

    public double Price { get; set; }

    public string Img { get; set; } = null!;

    public int IdCategory { get; set; }

    public string Description { get; set; } = null!;

    public int Count { get; set; }

    public int IsPopular { get; set; }
}
