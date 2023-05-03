using System;
using System.Collections.Generic;

namespace Domain.Model;

public partial class Order
{
    public int Id { get; set; }

    public int IdUser { get; set; }

    public DateTime Date { get; set; }

    public int IdProduct { get; set; }

    public int State { get; set; }
}
