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
    [Table("Shows",Schema="dbo")]
    public partial class Show
    {
		#region ShowId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ShowId Annotations

        public int ShowId { get; set; }

		#region ShowStartTime Annotations

        [Required]
		#endregion ShowStartTime Annotations

        public System.DateTimeOffset ShowStartTime { get; set; }

		#region ShowStopTime Annotations

        [Required]
		#endregion ShowStopTime Annotations

        public System.DateTimeOffset ShowStopTime { get; set; }


        public Show()
        {
        }
	}
}