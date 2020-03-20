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
    [Table("Movies",Schema="dbo")]
    public partial class Movie
    {
		#region MovieId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion MovieId Annotations

        public int MovieId { get; set; }

		#region MovieName Annotations

        [Required]
        [MaxLength(50)]
		#endregion MovieName Annotations

        public string MovieName { get; set; }

		#region MovieSynopsis Annotations

        [Required]
        [MaxLength(500)]
		#endregion MovieSynopsis Annotations

        public string MovieSynopsis { get; set; }

		#region MovieStarCast Annotations

        [Required]
        [MaxLength(200)]
		#endregion MovieStarCast Annotations

        public string MovieStarCast { get; set; }

		#region MovieCrew Annotations

        [MaxLength(200)]
		#endregion MovieCrew Annotations

        public string MovieCrew { get; set; }

		#region MovieType Annotations

        [MaxLength(50)]
		#endregion MovieType Annotations

        public string MovieType { get; set; }


        public Nullable<decimal> MovieRating { get; set; }


        public Movie()
        {
        }
	}
}