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
    [Table("Activities",Schema="dbo")]
    public partial class Activity
    {
		#region ActivityId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ActivityId Annotations

        public int ActivityId { get; set; }

		#region ActivityName Annotations

        [Required]
        [MaxLength(50)]
		#endregion ActivityName Annotations

        public string ActivityName { get; set; }

		#region Venue Annotations

        [Required]
        [MaxLength(5000)]
		#endregion Venue Annotations

        public string Venue { get; set; }

		#region ActivityDate Annotations

        [Required]
		#endregion ActivityDate Annotations

        public System.DateTimeOffset ActivityDate { get; set; }


        public Activity()
        {
        }
	}
}