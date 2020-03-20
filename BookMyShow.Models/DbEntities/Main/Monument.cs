using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using BookMyShow.Models.Enums.Main;
using BookMyShow.BoundedContext.SqlContext;
namespace BookMyShow.Models.Main
{
    [Table("Monuments",Schema="dbo")]
    public partial class Monument
    {
		#region MonumentId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion MonumentId Annotations

        public int MonumentId { get; set; }

		#region MonumentName Annotations

        [Required]
        [MaxLength(500)]
		#endregion MonumentName Annotations

        public string MonumentName { get; set; }

		#region Location Annotations

        [Required]
        [MaxLength(5000)]
		#endregion Location Annotations

        public string Location { get; set; }

		#region TicketPrice Annotations

        [Required]
		#endregion TicketPrice Annotations

        public decimal TicketPrice { get; set; }


        public Monument()
        {
        }
	}
}