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
    [Table("Screens",Schema="dbo")]
    public partial class Screen
    {
		#region ScreenId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ScreenId Annotations

        public int ScreenId { get; set; }

		#region ScreenNumber Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion ScreenNumber Annotations

        public int ScreenNumber { get; set; }


        public Nullable<int> SeatNumber { get; set; }


        public Screen()
        {
        }
	}
}