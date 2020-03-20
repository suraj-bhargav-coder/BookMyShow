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
    [Table("Screening",Schema="dbo")]
    public partial class Screening
    {
		#region ScreeningId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ScreeningId Annotations

        public int ScreeningId { get; set; }

		#region MovieId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion MovieId Annotations

        public int MovieId { get; set; }

		#region ScreenId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion ScreenId Annotations

        public int ScreenId { get; set; }


        public Nullable<TimeSpan> ScreeningTime { get; set; }


        public Screening()
        {
        }
	}
}