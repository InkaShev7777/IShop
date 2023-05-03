using System;
using System.Collections.Generic;

namespace Domain.Model;

public partial class Category
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;
}
