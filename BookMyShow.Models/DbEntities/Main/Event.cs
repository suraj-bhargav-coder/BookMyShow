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
    [Table("Events",Schema="dbo")]
    public partial class Event
    {
		#region EventId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion EventId Annotations

        public int EventId { get; set; }

		#region EventName Annotations

        [Required]
        [MaxLength(50)]
		#endregion EventName Annotations

        public string EventName { get; set; }

		#region EventTiming Annotations

        [Required]
		#endregion EventTiming Annotations

        public System.DateTimeOffset EventTiming { get; set; }

		#region EventDate Annotations

        [Required]
		#endregion EventDate Annotations

        public System.DateTimeOffset EventDate { get; set; }

		#region EventPlace Annotations

        [Required]
        [MaxLength(50)]
		#endregion EventPlace Annotations

        public string EventPlace { get; set; }

		#region EventHost Annotations

        [Required]
        [MaxLength(50)]
		#endregion EventHost Annotations

        public string EventHost { get; set; }

		#region EventDescription Annotations

        [Required]
        [MaxLength(500)]
		#endregion EventDescription Annotations

        public string EventDescription { get; set; }


        public Event()
        {
        }
	}
}