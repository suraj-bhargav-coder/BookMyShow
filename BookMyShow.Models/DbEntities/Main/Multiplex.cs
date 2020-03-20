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
    [Table("Multiplexes",Schema="dbo")]
    public partial class Multiplex
    {
		#region MultiplexId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion MultiplexId Annotations

        public int MultiplexId { get; set; }

		#region MultiplexName Annotations

        [Required]
        [MaxLength(50)]
		#endregion MultiplexName Annotations

        public string MultiplexName { get; set; }

		#region MultiplexLocation Annotations

        [Required]
        [MaxLength(200)]
		#endregion MultiplexLocation Annotations

        public string MultiplexLocation { get; set; }

		#region MultiplexDetail Annotations

        [MaxLength(500)]
		#endregion MultiplexDetail Annotations

        public string MultiplexDetail { get; set; }


        public Multiplex()
        {
        }
	}
}