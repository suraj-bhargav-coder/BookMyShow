using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using BookMyShow.BoundedContext.SqlContext;
namespace BookMyShow.Models.Main
{
    [Table("vMovies",Schema="dbo")]
    public partial class vMovy
    {
		#region MovieId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion MovieId Annotations

        public int MovieId { get; set; }


        public string MovieName { get; set; }


        public string MovieSynopsis { get; set; }


        public string MovieStarCast { get; set; }


        public string MovieCrew { get; set; }


        public string MovieType { get; set; }


        public Nullable<decimal> MovieRating { get; set; }


        public vMovy()
        {
        }
	}
}