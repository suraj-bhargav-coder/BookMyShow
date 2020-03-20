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
    [Table("Bookings",Schema="dbo")]
    public partial class Booking
    {
		#region BookingId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion BookingId Annotations

        public int BookingId { get; set; }

		#region BookingDate Annotations

        [Required]
		#endregion BookingDate Annotations

        public System.DateTimeOffset BookingDate { get; set; }


        public Nullable<int> ShowId { get; set; }


        public Nullable<int> ScreeningId { get; set; }


        public Nullable<int> BookingTypeId { get; set; }


        public Nullable<int> UserId { get; set; }


        public Nullable<TimeSpan> BookingTime { get; set; }


        public Nullable<int> ApplicationObjectId { get; set; }


        public Booking()
        {
        }
	}
}