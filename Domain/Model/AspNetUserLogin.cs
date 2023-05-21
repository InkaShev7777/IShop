using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Domain.Model;

namespace MarcetUser;
public partial class AspNetUserLogin
{

    public string LoginProvider { get; set; } = null!;
    [Key]
    public string ProviderKey { get; set; } = null!;

    public string? ProviderDisplayName { get; set; }

    public string? UserId { get; set; } = null!;

    public virtual AspNetUser? User { get; set; } = null!;
}
