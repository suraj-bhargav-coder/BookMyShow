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
    [Table("Seats",Schema="dbo")]
    public partial class Seat
    {
		#region SeatId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion SeatId Annotations

        public int SeatId { get; set; }

		#region SeatRow Annotations

        [Required]
        [MaxLength(2)]
		#endregion SeatRow Annotations

        public string SeatRow { get; set; }

		#region SeatColumn Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion SeatColumn Annotations

        public int SeatColumn { get; set; }

		#region SeatPrice Annotations

        [Required]
		#endregion SeatPrice Annotations

        public decimal SeatPrice { get; set; }


        public Nullable<int> ScreenId { get; set; }


        public Seat()
        {
        }
	}
}