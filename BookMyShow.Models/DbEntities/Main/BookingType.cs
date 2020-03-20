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
    [Table("BookingTypes",Schema="dbo")]
    public partial class BookingType
    {
		#region BookingTypeId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion BookingTypeId Annotations

        public int BookingTypeId { get; set; }

		#region Category Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion Category Annotations

        public int Category { get; set; }


        public BookingType()
        {
        }
	}
}